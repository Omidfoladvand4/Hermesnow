import React, { useCallback, useMemo } from 'react';
import styled from "styled-components";
import TitleIcon from "@mui/icons-material/Title";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import NotesIcon from "@mui/icons-material/Notes";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import ListIcon from "@mui/icons-material/List";
import ElementItem from './ElementItem';
import {toPersianNumbers} from '../services/persionNumber'


 const Label = styled.label`
  font-size: var(--font-size-md);
  font-weight: 700;
  display: block;
  color: var(--color-primary);
  margin-bottom: 6px;
`;

const ElementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 15px;
  margin: 20px 0;
  @media (max-width: 786px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ElementCard = styled.button`
  padding: 20px 15px;
  border: 2px solid
    ${({ added }) => added ? "var(--color-info)" : "var(--color-accent)"};
  background: ${({ added }) =>
    added ? "var(--color-info)" : "var(--color-secondary)"};
  color: ${({ added }) =>
    added ? "var(--color-secondary)" : "var(--color-primary)"};
  border-radius: 12px;
  cursor: ${({ added }) => (added ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-family: vazir;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  &:hover:not(:disabled) {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--color-primary);
    background: ${({ added }) => !added && "var(--color-accent)"};
    color: ${({ added }) => !added && "var(--color-secondary)"};
  }
  
  &:disabled {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    width: 35%;
    padding: 0;
  }
`;

const ELEMENTS_CONFIG = [
  { type: "h1", label: "تیتر", icon: TitleIcon },
  { type: "h2", label: "زیرتیتر", icon: LooksTwoIcon },
  { type: "p", label: "پاراگراف", icon: NotesIcon },
  { type: "img", label: "تصویر", icon: AddPhotoAlternateIcon },
  { type: "quote", label: "نقل قول", icon: QuoteIcon },
  { type: "list", label: "لیست", icon: ListIcon },
];


const generateId = () => `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;


const ElementCardItem = React.memo(({ 
  element, 
  isAdded, 
  onAdd 
}) => {
  const IconComponent = element.icon;
  
  return (
    <ElementCard
      type="button"
      added={isAdded}
      disabled={isAdded}
      onClick={() => !isAdded && onAdd(element.type)}
    >
      <span style={{ fontSize: "24px" }}>
        <IconComponent />
      </span>
      <span style={{ fontWeight: "600" }}>{element.label}</span>
      {isAdded && (
        <small
          style={{ fontSize: "11px", color: "inherit", opacity: 0.8 }}
        >
          ✓ اضافه شده
        </small>
      )}
    </ElementCard>
  );
});


function ElementManager({ formik }) {
  const { values, setFieldValue } = formik;
  const { content } = values;


  const ELEMENTS = useMemo(() => ELEMENTS_CONFIG, []);

  const addedElementsSet = useMemo(() => {
    return new Set(content.map(item => item.element));
  }, [content]);

  const isElementAdded = useCallback(
    (type) => addedElementsSet.has(type),
    [addedElementsSet]
  );


  const addElement = useCallback(
    (elementType) => {
      const newElement = {
        element: elementType,
        content: "",
        color: "#282929",
        id: generateId(),
      };
      
      setFieldValue("content", [...content, newElement]);
    },
    [content, setFieldValue]
  );

  const removeElement = useCallback(
    (index) => {
      setFieldValue(
        "content",
        content.filter((_, i) => i !== index)
      );
    },
    [content, setFieldValue]
  );

  const updateElementContent = useCallback(
    (index, field, value) => {
      setFieldValue(
        "content",
        content.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      );
    },
    [content, setFieldValue]
  );

  const moveElement = useCallback(
    (index, direction) => {
      if (
        (direction === "up" && index === 0) ||
        (direction === "down" && index === content.length - 1)
      ) {
        return;
      }

      const newContent = [...content];
      const swapIndex = direction === "up" ? index - 1 : index + 1;
      
      [newContent[index], newContent[swapIndex]] = [
        newContent[swapIndex],
        newContent[index],
      ];

      setFieldValue("content", newContent);
    },
    [content, setFieldValue]
  );

  const elementItemProps = useMemo(() => ({
    moveElement,
    removeElement,
    updateElementContent,
  }), [moveElement, removeElement, updateElementContent]);

  const elementCards = useMemo(() => {
    return ELEMENTS.map((element) => {
      const isAdded = isElementAdded(element.type);
      
      return (
        <ElementCardItem
          key={element.type}
          element={element}
          isAdded={isAdded}
          onAdd={addElement}
        />
      );
    });
  }, [ELEMENTS, isElementAdded, addElement]);

  const addedElements = useMemo(() => {
    if (content.length === 0) return null;

    return content.map((element, index) => {
      const elementInfo = ELEMENTS.find(
        (el) => el.type === element.element
      );

      return (
        <ElementItem
          key={element.id}
          element={element}
          index={index}
          elementInfo={{
            ...elementInfo,
            icon: elementInfo ? <elementInfo.icon /> : null
          }}
          {...elementItemProps}
          contentLength={content.length}
        />
      );
    });
  }, [content, ELEMENTS, elementItemProps]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "30px" }}>
        <Label>انتخاب نوع محتوا</Label>
        <ElementGrid>{elementCards}</ElementGrid>
      </div>

      {content.length > 0 && (
        <>
          <Label>
            <ListIcon /> المان‌های اضافه شده ({toPersianNumbers(content.length)})
          </Label>
          {addedElements}
        </>
      )}
    </div>
  );
}

export default React.memo(ElementManager);