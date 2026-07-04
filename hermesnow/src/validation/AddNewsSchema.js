
import * as Yup from "yup";

 export const getValidationSchema = () => Yup.object({
  NewsTitle: Yup.string()
    .required("عنوان خبر الزامی است")
    .min(5, "عنوان خبر باید حداقل ۵ کاراکتر باشد"),
  NewsSubject: Yup.string().required("موضوع خبر الزامی است"),
  NewsMainText: Yup.string()
    .required("خلاصه خبر الزامی است")
    .min(10, "خلاصه خبر باید حداقل ۱۰ کاراکتر باشد"),
  Journalist: Yup.string().required("نام خبرنگار الزامی است"),
  Country: Yup.string().required("کشور الزامی است"),
});
