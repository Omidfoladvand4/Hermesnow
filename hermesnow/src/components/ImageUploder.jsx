import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import styled from "styled-components";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const UploadButton = styled.label`
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  font-family: vazir;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: var(--color-neutral);
    cursor: not-allowed;
    transform: none;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  max-width: 200px;
  max-height: 150px;
  border-radius: 8px;
  margin-top: 10px;
  border: 2px solid var(--color-info);
  object-fit: cover;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--color-neutral);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--color-info);
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease;
`;

const ErrorMessage = styled.span`
  color: var(--color-accent);
  font-size: 12px;
  margin-top: 5px;
  font-family: vazir;
`;

const SuccessMessage = styled.span`
  color: var(--color-info);
  font-size: 12px;
  margin-top: 5px;
  font-family: vazir;
`;

function ImageUploader({ value, onChange, bucketName = "News_Images" }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("فقط فایل‌های تصویری مجاز هستند");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setError("حجم فایل نباید بیشتر از 3 مگابایت باشد");
      return;
    }

    setError("");
    setSuccess("");
    setUploading(true);
    setProgress(0);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      console.log("آپلود فایل:", fileName);
      console.log("باکت:", bucketName);

      const { error: uploadError, data } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("خطای آپلود:", uploadError);
        throw uploadError;
      }

      console.log("آپلود موفق:", data);

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucketName).getPublicUrl(fileName);

      console.log("آدرس عمومی:", publicUrl);

      onChange(publicUrl);
      setSuccess("✅ تصویر با موفقیت آپلود شد");
    } catch (error) {
      console.error("خطا در آپلود:", error);

      if (error.message?.includes("Bucket not found")) {
        setError("باکت پیدا نشد. لطفا با مدیر سیستم تماس بگیرید.");
      } else {
        setError("خطا در آپلود تصویر. لطفا دوباره تلاش کنید.");
      }
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <UploadContainer>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <HiddenInput
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
        />
        <UploadButton htmlFor="image-upload" disabled={uploading}>
          {uploading ? " در حال آپلود..." : " انتخاب تصویر"}
        </UploadButton>
      </div>

      {uploading && (
        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      {value && (
        <PreviewImage
          src={value}
          alt="تصویر آپلود شده"
          onError={(e) => {
            console.log("خطا در لود تصویر:", value);
            e.target.style.display = "none";
          }}
        />
      )}
    </UploadContainer>
  );
}

export default ImageUploader;
