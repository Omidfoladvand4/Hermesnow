import * as Yup from "yup";

export const signupSchema = Yup.object({
  userName: Yup.string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
    .max(20, "نام کاربری نباید بیشتر از ۲۰ کاراکتر باشد")
    .required("نام کاربری الزامی است")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و _ باشد"
    ),

  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی است"),

  password: Yup.string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .max(20, "رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد")
    .required("رمز عبور الزامی است"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور و تکرار آن باید یکسان باشد")
    .required("تکرار رمز عبور الزامی است"),
});