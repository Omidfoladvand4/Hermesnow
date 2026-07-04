import React, { useCallback, memo, useMemo } from 'react';
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageUploader from "./ImageUploder";

const Container = styled.div`
  border: 2px solid var(--color-info);
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(108, 146, 160, 0.1);
  
  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 6px 20px rgba(192, 123, 116, 0.15);
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--color-neutral);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const BaseButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-family: vazir;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ActionButton = styled(BaseButton)`
  background: var(--color-neutral);
  color: var(--color-primary);
  
  &:hover:not(:disabled) {
    background: var(--color-info);
    color: var(--color-secondary);
  }
`;

const DangerButton = styled(BaseButton)`
  background: var(--color-accent);
  color: var(--color-secondary);
  
  &:hover {
    background: #b36962;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid var(--color-secondary);
  border-radius: 10px;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  background: var(--color-secondary);
  color: var(--color-primary);
  font-family: vazir;
  
  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: var(--color-neutral);
    font-family: vazir;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-family: vazir;
`;

const ContentWrapper = styled.div`
  margin-bottom: 15px;
`;
const ImageField = memo(({ value, onChange }) => {

  const handleChange = useCallback((url) => {
    onChange(url);
  }, [onChange]);
  
  return (
    <>
      <Label>تصویر</Label>
      <ImageUploader
        value={value}
        onChange={handleChange}
        bucketName="News_Images"
      />
    </>
  );
});

const ListField = memo(({ value, onChange }) => {
  const handleChange = useCallback((e) => {
    onChange(e);
  }, [onChange]);
  
  return (
    <>
      <Label>موارد لیست (هر خط یک مورد)</Label>
      <TextArea
        value={value}
        onChange={handleChange}
        placeholder="مورد اول&#10;مورد دوم&#10;مورد سوم"
      />
    </>
  );
});

const TextField = memo(({ value, onChange, elementType }) => {

  const handleChange = useCallback((e) => {
    onChange(e);
  }, [onChange]);
  
  return (
    <>
      <Label>محتوا</Label>
      <TextArea
        value={value}
        onChange={handleChange}
        placeholder={`متن ${elementType} را وارد کنید...`}
      />
    </>
  );
});

function ElementItem({
  element,
  index,
  elementInfo,
  moveElement,
  removeElement,
  updateElementContent,
  contentLength,
}) {
  const handleMoveUp = useCallback(() => {
    moveElement(index, "up");
  }, [index, moveElement]);

  const handleMoveDown = useCallback(() => {
    moveElement(index, "down");
  }, [index, moveElement]);

  const handleRemove = useCallback(() => {
    removeElement(index);
  }, [index, removeElement]);

  const handleContentChange = useCallback(
    (e) => {
      updateElementContent(index, "content", e.target.value);
    },
    [index, updateElementContent]
  );

  const handleImageChange = useCallback(
    (url) => {
      updateElementContent(index, "content", url);
    },
    [index, updateElementContent]
  );

  const contentField = useMemo(() => {
    const { element: type, content } = element;

    switch (type) {
      case "img":
        return (
          <ImageField
            value={content}
            onChange={handleImageChange}
          />
        );
      case "list":
        return (
          <ListField
            value={content}
            onChange={handleContentChange}
          />
        );
      default:
        return (
          <TextField
            value={content}
            onChange={handleContentChange}
            elementType={type}
          />
        );
    }
  }, [element, handleContentChange, handleImageChange]);


  const isFirst = useMemo(() => index === 0, [index]);
  const isLast = useMemo(() => index === contentLength - 1, [index, contentLength]);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>
            {elementInfo?.icon}
            {elementInfo?.label}
          </Title>
        </TitleWrapper>

        <ButtonsWrapper>
          <ActionButton
            type="button"
            onClick={handleMoveUp}
            disabled={isFirst}
          >
            <KeyboardArrowUpIcon /> بالا
          </ActionButton>
          <ActionButton
            type="button"
            onClick={handleMoveDown}
            disabled={isLast}
          >
            <KeyboardArrowDownIcon /> پایین
          </ActionButton>
          <DangerButton
            type="button"
            onClick={handleRemove}
          >
            <DeleteIcon /> حذف
          </DangerButton>
        </ButtonsWrapper>
      </Header>

      <ContentWrapper>
        {contentField}
      </ContentWrapper>
    </Container>
  );
}

export default memo(ElementItem);