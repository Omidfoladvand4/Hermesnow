import { useFormik } from "formik";
import { commentSchema } from "../validation/commentSchema";
import { addComment  , getComments} from "../services/commentService";

export function useCommentForm({ 
  newsId, 
  user, 
  isAuthenticated, 
  setComments, 
  onCommentAdded,
  setError 
}) {
  return useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: commentSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Validation سمت کلاینت
        if (!isAuthenticated) {
          setError("برای ثبت نظر باید وارد شوید");
          return;
        }

        if (!values.comment.trim()) {
          setError("نظر نمی‌تواند خالی باشد");
          return;
        }

        // ساخت کامنت جدید
        const newComment = {
          id: Date.now(),
          content: values.comment.trim(),
          user_name: user?.UserName || user?.email?.split("@")[0] || "کاربر",
          created_at: new Date().toISOString(),
        };

        // Optimistic Update
        setComments(prev => [newComment, ...prev]);
        onCommentAdded?.(newComment);
        resetForm();

        // ارسال به سرور
        const updatedComments = await addComment(newsId, newComment);
        
        // Sync با سرور
        setComments(updatedComments);
        setError(null);

      } catch (error) {
        console.error("خطا در ثبت نظر:", error);
        setError("خطا در ثبت نظر. لطفاً دوباره تلاش کنید.");
        
        // برگردوندن state قبلی در صورت خطا
        const previousComments = await getComments(newsId);
        setComments(previousComments);
      } finally {
        setSubmitting(false);
      }
    },
  });
}