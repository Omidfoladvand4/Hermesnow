import React, { useState } from "react";
import styled from "styled-components";
import { uploadImage } from "../services/imageService";
import { validateImage } from "../validation/validateImage";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const ImageInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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

const ErrorMessage = styled.span`
  color: red;
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
const BUCKET_NAME = "News_Images"
function ImageUploader({ value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const validationError = validateImage(file);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setSuccess("");
    setUploading(true);

    try {
      const publicUrl = await uploadImage(file, BUCKET_NAME);

      onChange(publicUrl);

      setSuccess(" تصویر با موفقیت آپلود شد");
    } catch (error) {
      console.error("خطا در آپلود:", error);

      if (error.message?.includes("Bucket not found")) {
        setError("باکت پیدا نشد. لطفا با مدیر سیستم تماس بگیرید.");
      } else {
        setError("خطا در آپلود تصویر. لطفا دوباره تلاش کنید.");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadContainer>
      <ImageInputContainer>
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
      </ImageInputContainer>
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
