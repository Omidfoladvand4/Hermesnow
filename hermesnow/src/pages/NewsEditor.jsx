import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { supabase } from '../lib/supabaseClient';
import ImageUploader from '../components/ImageUploder';
const NewsEditorContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
  background: var(--color-secondary);
  min-height: 100vh;
`;

const ToggleSwitch = styled.div`
  display: flex;
  background: var(--color-secondary);
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 30px;
  border: 2px solid var(--color-info);
  width: 300px;
  box-shadow: 0 4px 15px rgba(108, 146, 160, 0.2);
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  background: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: vazir;
  font-size: 14px;

  &:hover {
    background: ${props => props.active ? 'var(--color-accent)' : 'var(--color-info)'};
    color: var(--color-secondary);
    transform: ${props => !props.active ? 'translateY(-2px)' : 'none'};
  }
`;

const NewsEditorForm = styled.form`
  width: 90%;
  max-width: 800px;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  margin: 15px 0;
  background-color: var(--color-primary);
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(40, 41, 41, 0.1);
  border: 2px solid var(--color-info);
`;

const PreviewContainer = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 30px;
  margin: 15px 0;
  background: var(--color-secondary);
  border-radius: 15px;
  border: 2px solid var(--color-info);
  min-height: 500px;
  box-shadow: 0 8px 30px rgba(40, 41, 41, 0.1);
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  display: block;
  color: var(--color-secondary);
  margin-bottom: 8px;
`;

const PreviewLabel = styled(Label)`
  color: var(--color-primary);
  text-align: center;
  width: 100%;
  margin-bottom: 25px;
  font-size: 20px;
  border-bottom: 3px solid var(--color-accent);
  padding-bottom: 10px;
`;

const MainTextInput = styled.textarea`
  width: 100%;
  height: 120px;
  resize: none;
  overflow-y: scroll;
  padding: 15px;
  font-family: vazir;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--color-neutral);
    font-family: vazir;
  }

  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-family: vazir;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-family: vazir;
  font-size: 14px;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--color-neutral);
    font-family: vazir;
  }

  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 40px;
  background: var(--color-accent);
  color: var(--color-secondary);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: vazir;
  margin-top: 20px;
  align-self: center;
  box-shadow: 0 4px 15px rgba(192, 123, 116, 0.3);

  &:hover:not(:disabled) {
    background: #b36962;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(192, 123, 116, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ElementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 15px;
  margin: 20px 0;
`;

const ElementCard = styled.button`
  padding: 20px 15px;
  border: 2px dashed ${props => props.added ? 'var(--color-info)' : 'var(--color-accent)'};
  background: ${props => props.added ? 'var(--color-info)' : 'var(--color-secondary)'};
  color: ${props => props.added ? 'var(--color-secondary)' : 'var(--color-primary)'};
  border-radius: 12px;
  cursor: ${props => props.added ? 'not-allowed' : 'pointer'};
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
    box-shadow: 0 8px 25px rgba(192, 123, 116, 0.3);
    background: ${props => !props.added && 'var(--color-accent)'};
    color: ${props => !props.added && 'var(--color-secondary)'};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const ElementItem = styled.div`
  border: 2px solid var(--color-info);
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  background: var(--color-secondary);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(108, 146, 160, 0.1);

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 6px 20px rgba(192, 123, 116, 0.15);
    transform: translateY(-2px);
  }
`;

const ElementHeader = styled.div`
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

const ColorPicker = styled.input`
  width: 50px;
  height: 35px;
  border: 2px solid var(--color-neutral);
  border-radius: 6px;
  cursor: pointer;
  margin-right: 15px;
  background: var(--color-secondary);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    transform: scale(1.05);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ActionButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--color-neutral);
  color: var(--color-primary);
  font-weight: 600;
  font-family: vazir;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover:not(:disabled) {
    background: var(--color-info);
    color: var(--color-secondary);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DangerButton = styled(ActionButton)`
  background: var(--color-accent);
  color: var(--color-secondary);

  &:hover {
    background: #b36962;
    transform: translateY(-2px);
  }
`;

const ElementTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-size: 14px;
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

const ElementInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s ease;
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

const ElementLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 14px;
  font-family: vazir;
`;

const ErrorMessage = styled.div`
  color: var(--color-accent);
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;
  font-family: vazir;
  padding: 8px 12px;
  background: rgba(192, 123, 116, 0.1);
  border-radius: 6px;
  border-right: 3px solid var(--color-accent);
`;

const SuccessMessage = styled.div`
  color: var(--color-info);
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
  font-family: vazir;
  padding: 15px;
  background: var(--color-secondary);
  border-radius: 10px;
  border: 2px solid var(--color-info);
  box-shadow: 0 4px 15px rgba(108, 146, 160, 0.2);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ElementManager = ({ formik }) => {
  const [availableElements, setAvailableElements] = useState([
    { type: 'h1', label: 'عنوان اصلی', icon: '📌', added: false },
    { type: 'h2', label: 'زیرعنوان', icon: '📍', added: false },
    { type: 'p', label: 'پاراگراف', icon: '📝', added: false },
    { type: 'img', label: 'تصویر', icon: '🖼️', added: false },
    { type: 'quote', label: 'نقل قول', icon: '💬', added: false },
    { type: 'list', label: 'لیست', icon: '📋', added: false }
  ]);

  const addElement = (elementType) => {
    const newElement = {
      element: elementType,
      content: '',
      color: '#282929',
      id: Date.now()
    };

    formik.setFieldValue('content', [...formik.values.content, newElement]);
    
    setAvailableElements(prev => 
      prev.map(item => 
        item.type === elementType ? { ...item, added: true } : item
      )
    );
  };

  const removeElement = (index, elementType) => {
    const newContent = formik.values.content.filter((_, i) => i !== index);
    formik.setFieldValue('content', newContent);
    
    setAvailableElements(prev => 
      prev.map(item => 
        item.type === elementType ? { ...item, added: false } : item
      )
    );
  };

  const updateElementContent = (index, field, value) => {
    const newContent = [...formik.values.content];
    newContent[index][field] = value;
    formik.setFieldValue('content', newContent);
  };

  const moveElement = (index, direction) => {
    const newContent = [...formik.values.content];
    if (direction === 'up' && index > 0) {
      [newContent[index], newContent[index - 1]] = [newContent[index - 1], newContent[index]];
    } else if (direction === 'down' && index < newContent.length - 1) {
      [newContent[index], newContent[index + 1]] = [newContent[index + 1], newContent[index]];
    }
    formik.setFieldValue('content', newContent);
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '30px' }}>
        <Label>🎛️ انتخاب نوع محتوا</Label>
        <ElementGrid>
          {availableElements.map((element) => (
            <ElementCard
              key={element.type}
              type="button"
              added={element.added}
              onClick={() => !element.added && addElement(element.type)}
              disabled={element.added}
            >
              <span style={{ fontSize: '24px' }}>{element.icon}</span>
              <span style={{ fontWeight: '600' }}>{element.label}</span>
              {element.added && (
                <small style={{ fontSize: '11px', color: 'inherit', opacity: 0.8 }}>
                  ✓ اضافه شده
                </small>
              )}
            </ElementCard>
          ))}
        </ElementGrid>
      </div>

      {formik.values.content.length > 0 && (
        <div>
          <Label>📋 المان‌های اضافه شده ({formik.values.content.length})</Label>
          
          {formik.values.content.map((element, index) => {
            const elementInfo = availableElements.find(el => el.type === element.element);
            return (
              <ElementItem key={element.id}>
                <ElementHeader>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ 
                      fontWeight: 'bold', 
                      fontSize: '16px', 
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>{elementInfo?.icon}</span>
                      {elementInfo?.label}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ElementLabel style={{ margin: 0, marginLeft: '10px' }}>
                        رنگ:
                      </ElementLabel>
                      <ColorPicker
                        type="color"
                        value={element.color}
                        onChange={(e) => updateElementContent(index, 'color', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <ActionButtons>
                    <ActionButton
                      type="button"
                      onClick={() => moveElement(index, 'up')}
                      disabled={index === 0}
                    >
                      ⬆️ بالا
                    </ActionButton>
                    <ActionButton
                      type="button"
                      onClick={() => moveElement(index, 'down')}
                      disabled={index === formik.values.content.length - 1}
                    >
                      ⬇️ پایین
                    </ActionButton>
                    <DangerButton
                      type="button"
                      onClick={() => removeElement(index, element.element)}
                    >
                      🗑️ حذف
                    </DangerButton>
                  </ActionButtons>
                </ElementHeader>

                <div style={{ marginBottom: '15px' }}>
                  {element.element === 'img' ? (
                    <>
                      <ElementLabel>تصویر</ElementLabel>
                      <ImageUploader
                        value={element.content}
                        onChange={(url) => updateElementContent(index, 'content', url)}
                        bucketName="News_Images"
                      />
                    </>
                  ) : element.element === 'list' ? (
                    <>
                      <ElementLabel>موارد لیست (هر خط یک مورد)</ElementLabel>
                      <ElementTextArea
                        value={element.content}
                        onChange={(e) => updateElementContent(index, 'content', e.target.value)}
                        placeholder="مورد اول&#10;مورد دوم&#10;مورد سوم"
                      />
                    </>
                  ) : (
                    <>
                      <ElementLabel>محتوا</ElementLabel>
                      <ElementTextArea
                        value={element.content}
                        onChange={(e) => updateElementContent(index, 'content', e.target.value)}
                        placeholder={`متن ${element.element} را وارد کنید...`}
                      />
                    </>
                  )}
                </div>
              </ElementItem>
            );
          })}
        </div>
      )}
    </div>
  );
};

// کامپوننت پیش‌نمایش
const PreviewContent = ({ formik }) => {
  const renderContent = () => {
    if (!formik.values.content || formik.values.content.length === 0) {
      return (
        <div style={{ 
          textAlign: 'center', 
          color: 'var(--color-neutral)', 
          padding: '40px',
          fontStyle: 'italic'
        }}>
          📝 محتوایی برای نمایش وجود ندارد. لطفا در تب ویرایشگر محتوا اضافه کنید.
        </div>
      );
    }

    return formik.values.content.map((element, index) => {
      const style = { color: element.color, marginBottom: '20px' };
      
      switch(element.element) {
        case 'h1':
          return <h1 key={index} style={style}>{element.content}</h1>;
        case 'h2':
          return <h2 key={index} style={style}>{element.content}</h2>;
        case 'p':
          return <p key={index} style={{...style, lineHeight: '1.8'}}>{element.content}</p>;
        case 'img':
          return element.content ? (
            <div key={index} style={style}>
              <img 
                src={element.content} 
                alt="" 
                style={{ 
                  maxWidth: '100%', 
                  border: `3px solid ${element.color}`,
                  borderRadius: '8px'
                }} 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ) : null;
        case 'quote':
          return element.content ? (
            <blockquote key={index} style={{
              ...style,
              borderRight: `4px solid ${element.color}`,
              paddingRight: '20px',
              margin: '20px 0',
              fontStyle: 'italic'
            }}>
              {element.content}
            </blockquote>
          ) : null;
        case 'list':
          return element.content ? (
            <ul key={index} style={style}>
              {element.content.split('\n').filter(item => item.trim()).map((item, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
          ) : null;
        default:
          return null;
      }
    });
  };

  return (
    <div>
      {formik.values.NewsTitle && (
        <h1 style={{ 
          color: 'var(--color-primary)', 
          textAlign: 'center', 
          marginBottom: '30px',
          borderBottom: '3px solid var(--color-accent)',
          paddingBottom: '10px'
        }}>
          {formik.values.NewsTitle}
        </h1>
      )}
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '20px',
        padding: '15px',
        background: 'var(--color-primary)',
        color: 'var(--color-secondary)',
        borderRadius: '8px'
      }}>
        {formik.values.NewsSubject && (
          <div><strong>موضوع:</strong> {formik.values.NewsSubject}</div>
        )}
        {formik.values.Country && (
          <div><strong>کشور:</strong> {formik.values.Country}</div>
        )}
        {formik.values.Journalist && (
          <div><strong>خبرنگار:</strong> {formik.values.Journalist}</div>
        )}
      </div>
      
      {formik.values.MainImage && (
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <img 
            src={formik.values.MainImage} 
            alt="تصویر اصلی خبر"
            style={{ 
              maxWidth: '100%', 
              maxHeight: '400px',
              borderRadius: '8px',
              border: '2px solid var(--color-info)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      {formik.values.NewsMainText && (
        <div style={{
          background: 'var(--color-primary)',
          color: 'var(--color-secondary)',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          border: '2px solid var(--color-info)'
        }}>
          <strong>خلاصه خبر: </strong>{formik.values.NewsMainText}
        </div>
      )}
      
      {formik.values.Video && (
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <video 
            controls 
            style={{ 
              maxWidth: '100%', 
              borderRadius: '8px',
              border: '2px solid var(--color-accent)'
            }}
          >
            <source src={formik.values.Video} />
            مرورگر شما از ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      )}
      
      {renderContent()}
    </div>
  );
};

// کامپوننت اصلی
function NewsEditor() {
  const [activeTab, setActiveTab] = useState('editor');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    NewsTitle: Yup.string()
      .required('عنوان خبر الزامی است')
      .min(5, 'عنوان خبر باید حداقل ۵ کاراکتر باشد'),
    NewsSubject: Yup.string()
      .required('موضوع خبر الزامی است'),
    NewsMainText: Yup.string()
      .required('خلاصه خبر الزامی است')
      .min(10, 'خلاصه خبر باید حداقل ۱۰ کاراکتر باشد'),
    Journalist: Yup.string()
      .required('نام خبرنگار الزامی است'),
    Country: Yup.string()
      .required('کشور الزامی است'),
    content: Yup.array()
      .min(1, 'حداقل یک المان محتوا اضافه کنید')
  });

  const formik = useFormik({
    initialValues: {
      NewsTitle: '',
      NewsSubject: '',
      NewsMainText: '',
      MainImage: '',
      Country: '',
      Journalist: '',
      Video: '',
      IsTrend: false,
      content: []
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        setSubmitStatus('در حال ارسال...');
        
        const newsData = {
          NewsTitle: values.NewsTitle,
          NewsSubject: values.NewsSubject,
          NewsMainText: values.NewsMainText,
          MainImage: values.MainImage,
          Country: values.Country,
          Journalist: values.Journalist,
          Video: values.Video,
          Content: values.content,
          NewsDate: new Date().toISOString(),
        };

        const { data, error } = await supabase
          .from('News')
          .insert([newsData])
          .select();

        if (error) {
          console.error('خطای Supabase:', error);
          throw new Error(error.message);
        }
        
        setSubmitStatus('success');
        resetForm();
        
        setTimeout(() => {
          setSubmitStatus('');
          setIsSubmitting(false);
        }, 3000);
        
      } catch (error) {
        console.error('خطا در ارسال خبر:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    }
  });

  return (
    <NewsEditorContainer>
      <ToggleSwitch>
        <ToggleButton
          type="button"
          active={activeTab === 'editor'}
          onClick={() => setActiveTab('editor')}
        >
          ✏️ ویرایشگر
        </ToggleButton>
        <ToggleButton
          type="button"
          active={activeTab === 'preview'}
          onClick={() => setActiveTab('preview')}
        >
          👁️ پیش‌نمایش
        </ToggleButton>
      </ToggleSwitch>

      {activeTab === 'editor' && (
        <NewsEditorForm onSubmit={formik.handleSubmit}>
          <Label>عنوان خبر *</Label>
          <Input 
            type="text" 
            placeholder="مثل دیدار ترامپ با رِئیس جمهور روسیه"
            {...formik.getFieldProps('NewsTitle')}
          />
          {formik.touched.NewsTitle && formik.errors.NewsTitle && (
            <ErrorMessage>{formik.errors.NewsTitle}</ErrorMessage>
          )}

          <Label>موضوع خبر *</Label>
          <Select {...formik.getFieldProps('NewsSubject')}>
            <option value="">انتخاب کنید</option>
            <option value="سیاسی">سیاسی</option>
            <option value="ورزشی">ورزشی</option>
            <option value="اقتصاد">اقتصاد</option>
            <option value="هنر">هنر</option>
            <option value="باستان‌شناسی">باستان‌شناسی</option>
            <option value="کشاورزی">کشاورزی</option>
            <option value="صنعت">صنعت</option>
            <option value="آموزش">آموزش</option>
            <option value="انگلیسی">انگلیسی</option>
            <option value="فرهنگی">فرهنگی</option>
            <option value="محیط زیست">محیط زیست</option>
            <option value="گردشگری">گردشگری</option>
            <option value="مذهبی">مذهبی</option>
            <option value="تکنولوژی">تکنولوژی</option>
          </Select>
          {formik.touched.NewsSubject && formik.errors.NewsSubject && (
            <ErrorMessage>{formik.errors.NewsSubject}</ErrorMessage>
          )}

          <Label>خلاصه خبر *</Label>
          <MainTextInput 
            placeholder="خلاصه خبر را درج نمایید" 
            {...formik.getFieldProps('NewsMainText')}
          />
          {formik.touched.NewsMainText && formik.errors.NewsMainText && (
            <ErrorMessage>{formik.errors.NewsMainText}</ErrorMessage>
          )}

          <FormRow>
            <div>
              <Label>تصویر اصلی</Label>
              <ImageUploader
                value={formik.values.MainImage}
                onChange={(url) => formik.setFieldValue('MainImage', url)}
                bucketName="News_Images"
              />
            </div>
            <div>
              <Label>کشور *</Label>
              <Input 
                type="text" 
                placeholder="مثل ایران، آمریکا، روسیه"
                {...formik.getFieldProps('Country')}
              />
              {formik.touched.Country && formik.errors.Country && (
                <ErrorMessage>{formik.errors.Country}</ErrorMessage>
              )}
            </div>
          </FormRow>

          <FormRow>
            <div>
              <Label>خبرنگار *</Label>
              <Input 
                type="text" 
                placeholder="نام خبرنگار"
                {...formik.getFieldProps('Journalist')}
              />
              {formik.touched.Journalist && formik.errors.Journalist && (
                <ErrorMessage>{formik.errors.Journalist}</ErrorMessage>
              )}
            </div>
            <div>
              <Label>لینک ویدیو (اختیاری)</Label>
              <Input 
                type="text" 
                placeholder="آدرس ویدیو"
                {...formik.getFieldProps('Video')}
              />
            </div>
          </FormRow>

          <ElementManager formik={formik} />
          {formik.touched.content && formik.errors.content && (
            <ErrorMessage>{formik.errors.content}</ErrorMessage>
          )}

          {submitStatus === 'success' && (
            <SuccessMessage>
              ✅ خبر با موفقیت در دیتابیس ذخیره شد!
            </SuccessMessage>
          )}
          {submitStatus === 'error' && (
            <ErrorMessage style={{ textAlign: 'center' }}>
              ❌ خطا در ایجاد خبر. لطفا مجدد تلاش کنید.
            </ErrorMessage>
          )}

          <SubmitButton 
            type="submit" 
            disabled={isSubmitting || !formik.isValid}
          >
            {isSubmitting ? '⏳ در حال ارسال به دیتابیس...' : '📰 ذخیره خبر در دیتابیس'}
          </SubmitButton>
        </NewsEditorForm>
      )}

      {activeTab === 'preview' && (
        <PreviewContainer>
          <PreviewLabel>پیش‌نمایش خبر</PreviewLabel>
          <PreviewContent formik={formik} />
        </PreviewContainer>
      )}
    </NewsEditorContainer>
  );
}

export default NewsEditor;