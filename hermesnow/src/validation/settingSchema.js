import * as Yup from "yup";
export const step1Schema = Yup.object({
    UserName: Yup.string()
      .required("نام کاربری الزامی است")
      .min(3, "باید حداقل ۳ کاراکتر باشد")
      .max(20, "نباید بیشتر از ۲۰ کاراکتر باشد"),
    UserAge: Yup.number()
      .typeError("سن باید عدد باشد")
      .min(1, "سن باید بیشتر از ۰ باشد")
      .max(120, "سن معتبر نیست"),
    UserCountry: Yup.string(),
  });

 export const step2Schema = Yup.object({
    UserPassword: Yup.string()
      .min(6, "باید بیشتر از 6 کاراکتر باشد")
      .max(20, "نباید بیشتر از 20 کاراکتر باشد"),
    UserEmail: Yup.string()
      .email("ایمیل معتبر نیست")
      .required("ایمیل الزامی است"),
    UserPhone: Yup.string().matches(/^[0-9+-\s()]*$/, "شماره تلفن معتبر نیست"),
  });

 export const step3Schema = Yup.object({
    FavoritesTopic: Yup.string()
      .min(3, "باید حداقل ۳ کاراکتر باشد")
      .max(50, "نباید بیشتر از ۵۰ کاراکتر باشد"),
    Gender: Yup.string().required("جنسیت الزامی است"),
  });
