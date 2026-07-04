import * as Yup from "yup";

export const commentSchema = Yup.object({
  comment: Yup.string()
    .trim()
    .min(10, "نظر باید حداقل ۱۰ کاراکتر باشد")
    .max(500, "نظر باید حداکثر ۵۰۰ کاراکتر باشد")
    .required("لطفاً نظر خود را وارد کنید"),
});