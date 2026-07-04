const MAX_FILE_SIZE_MB = 3;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

export function validateImage(file) {
  if (!file) {
    return "فایلی انتخاب نشده است.";
  }

  if (!file.type.startsWith("image/")) {
    return "فقط فایل‌های تصویری مجاز هستند.";
  }

  if (file.size > MAX_FILE_SIZE) {
    return "حجم فایل نباید بیشتر از 3 مگابایت باشد.";
  }

  return null;
}