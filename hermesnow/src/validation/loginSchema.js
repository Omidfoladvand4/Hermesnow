import * as Yup from "yup";

export const loginSchema = Yup.object({
  userName: Yup.string()
    .min(3, "نام کاربری باید بیشتر از 3 کاراکتر باشد")
    .max(20, "نام کاربری نباید بیشتر از 20 کاراکتر باشد")
    .required("نام کاربری الزامی است"),

  password: Yup.string()
    .min(6, "رمز عبور باید بیشتر از 6 کاراکتر باشد")
    .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});