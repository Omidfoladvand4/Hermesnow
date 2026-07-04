import React, { useState, useMemo, useEffect, useRef } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { supabase } from "../lib/supabaseClient";
import ImageUploader from "../components/ImageUploder";
import { rotateIn } from "../styles/animations";
import ElementManager from "../components/ElementManager";
import  {getValidationSchema}  from "../validation/AddNewsSchema";

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
  animation: ${rotateIn} 0.3s linear;
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Label = styled.label`
  font-size: var(--font-size-md);
  font-weight: 700;
  display: block;
  color: var(--color-primary);
  margin-bottom: 6px;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 15px 0;
  background-color: var(--color-accent);
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(40, 41, 41, 0.1);
  border: 2px solid var(--color-info);
  @media (max-width: 768px) {
    width: 90%;
    gap: 10px;
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 120px;
  resize: none;
  overflow-y: scroll;
  padding: 15px;
  font-family: vazir;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-size: var(--font-size-sm);
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 60%;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 60%;
  padding: 15px;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-family: vazir;
  font-size: var(--font-size-sm);
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
  font-size: var(--font-size-sm);
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

const ErrorMessage = styled.div`
  color: red;
  font-size: var(--font-size-xs);
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
  font-size: var(--font-size-sm);
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

const SUBJECT_OPTIONS = [
  "سیاست", "ورزشی", "اقتصاد", "هنر",
  "باستان‌شناسی-تاریخی", "کشاورزی", "صنعت",
  "آموزش", "انگلیسی", "فرهنگی",
  "محیط زیست", "گردشگری", "مذهبی", "تکنولوژی"
];

const newsService = {
  async create(newsData) {
    const { data, error } = await supabase
      .from("News")
      .insert([newsData])
      .select();
    
    if (error) {
      console.error("خطای Supabase:", error);
      throw new Error(error.message);
    }
    
    return data;
  }
};

function NewsEditor() {
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef(null);

  // Validation schema
  const validationSchema = useMemo(() => getValidationSchema(), []);


  const formik = useFormik({
    initialValues: {
      NewsTitle: "",
      NewsSubject: "",
      NewsMainText: "",
      MainImage: "",
      Country: "",
      Journalist: "",
      Video: "",
      IsTrend: false,
      content: [],
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        setSubmitStatus("در حال ارسال...");

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

        console.log(" ارسال به دیتابیس:", newsData);

        await newsService.create(newsData);

        console.log(" ذخیره شد!");

        setSubmitStatus("success");
        resetForm();
        
        timerRef.current = setTimeout(() => {
          setSubmitStatus("");
          setIsSubmitting(false);
        }, 3000);

      } catch (error) {
        console.error(" خطا:", error);
        setSubmitStatus("error");
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const renderField = (field, label, Component, props = {}) => {
    const hasError = formik.touched[field] && formik.errors[field];
    return (
      <>
        <Label>{label}</Label>
        <Component
          {...formik.getFieldProps(field)}
          {...props}
        />
        {hasError && <ErrorMessage>{formik.errors[field]}</ErrorMessage>}
      </>
    );
  };

  const statusMessage = useMemo(() => {
    if (submitStatus === "success") {
      return <SuccessMessage> خبر با موفقیت ذخیره شد!</SuccessMessage>;
    }
    if (submitStatus === "error") {
      return <ErrorMessage style={{ textAlign: "center" }}> خطا در ایجاد خبر</ErrorMessage>;
    }
    return null;
  }, [submitStatus]);

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        {renderField("NewsTitle", "عنوان خبر *", Input, {
          type: "text",
          placeholder: "عنوان خبر را وارد کنید",
        })}

    
        <Label>موضوع خبر *</Label>
        <Select {...formik.getFieldProps("NewsSubject")}>
          <option value="">انتخاب کنید</option>
          {SUBJECT_OPTIONS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </Select>
        {formik.touched.NewsSubject && formik.errors.NewsSubject && (
          <ErrorMessage>{formik.errors.NewsSubject}</ErrorMessage>
        )}

        {renderField("NewsMainText", "خلاصه خبر *", TextArea, {
          placeholder: "خلاصه خبر را درج نمایید",
        })}

        <FormRow>
          <div>
            <Label>تصویر اصلی</Label>
            <ImageUploader
              value={formik.values.MainImage}
              onChange={(url) => formik.setFieldValue("MainImage", url)}
            />
          </div>
          <div>
            {renderField("Country", "کشور *", Input, {
              type: "text",
              placeholder: "مثل ایران، آمریکا، روسیه",
            })}
          </div>
        </FormRow>

        <FormRow>
          <div>
            {renderField("Journalist", "خبرنگار *", Input, {
              type: "text",
              placeholder: "نام خبرنگار",
            })}
          </div>
          <div>
            <Label>لینک ویدیو (اختیاری)</Label>
            <Input
              type="text"
              placeholder="آدرس ویدیو"
              {...formik.getFieldProps("Video")}
            />
          </div>
        </FormRow>

      
        <ElementManager formik={formik} />

      
        {statusMessage}

     
        <SubmitButton 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? " در حال ارسال..." : " ذخیره خبر"}
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default React.memo(NewsEditor);