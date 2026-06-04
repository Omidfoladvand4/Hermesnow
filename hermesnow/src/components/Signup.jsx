import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import Navigations from "./Navigations";
import { slideInStagger } from "../styles/animations";
import bgImage from "../assets/HermesNowBannar1.jpg";

const SingupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  z-index: 120;
  animation: ${slideInStagger} 0.5s linear;
`;

const SignupWrapper = styled.form`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 10px;
  background-color: var(--color-info);
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 100%;
    margin: 0;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`;

const LabelFelid = styled.label`
  font-weight: bolder;
  color: var(--color-primary);
  display: block;
  font-size: var(--font-size-xl);
  font-weight: 900;
`;

const InputFeild = styled.input`
  width: 90%;
  padding: 10px 5px;
  color:  white;
  background-color: var(--color-accent);
`;

const ErrorFelid = styled.div`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`;

const SignupButton = styled.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 900;
  font-size: var(--font-size-xl);
  cursor: pointer;
  color: white;
  background: var(--color-primary);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
  background: ${(props) => (props.type === "success" ? "#f0f9ff" : "#fef2f2")};
  color: ${(props) => (props.type === "success" ? "#0369a1" : "#dc2626")};
  border: 1px solid
    ${(props) => (props.type === "success" ? "#bae6fd" : "#fecaca")};
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 16px;

  a {
      color: var(--color-primary);
    text-decoration: none;
    font-weight: bolder;
  }
`;
const LoginRoute = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-accent);
  font-weight: 700;
`;
const Signup = () => {
  const { signup, loading, error } = useSignup();

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
      .max(20, "نام کاربری نباید بیشتر از ۲۰ کاراکتر باشد")
      .required("نام کاربری الزامی است")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و underline باشد",
      ),
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    password: Yup.string()
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
      .max(20, "رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد")
      .required("رمز عبور الزامی است"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "رمز عبور و تکرار آن باید یکسان باشد")
      .required("تکرار رمز عبور  باید یکسان باشد"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await signup(values);
    },
  });

  return (
    <SingupContainer>
      <Navigations
        titleName="ثبت نام"
        font="var(--font-size-lg)"
        color="var(--color-primary)">
        {" "}
      </Navigations>

      <SignupWrapper onSubmit={formik.handleSubmit}>

        {error && <Message type="error">❌ {error}</Message>}

        <FormContainer>
          <LabelFelid>نام کاربری</LabelFelid>
          <InputFeild
            id="userName"
            name="userName"
            type="text"
            placeholder="example123"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            hasError={formik.touched.userName && formik.errors.userName}
            
          />
          {formik.touched.userName && formik.errors.userName && (
            <ErrorFelid>{formik.errors.userName}</ErrorFelid>
          )}
        </FormContainer>

        <FormContainer>
          <LabelFelid>ایمیل</LabelFelid>
          <InputFeild
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            hasError={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorFelid>{formik.errors.email}</ErrorFelid>
          )}
        </FormContainer>

        <FormContainer>
          <LabelFelid>رمز عبور</LabelFelid>
          <InputFeild
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            hasError={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorFelid>{formik.errors.password}</ErrorFelid>
          )}
        </FormContainer>

        <FormContainer>
          <LabelFelid>تکرار رمز عبور</LabelFelid>
          <InputFeild
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            hasError={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <ErrorFelid>{formik.errors.confirmPassword}</ErrorFelid>
          )}
        </FormContainer>

        <FormContainer style={{ alignItems: "center" }}>
          <SignupButton type="submit" disabled={loading}>
            {loading ? "در حال ثبت‌ نام..." : "ثبت‌ نام"}
          </SignupButton>

          <LoginLink>
            <LoginRoute>
              حساب کاربری دارید؟ <Link to="/login">وارد شوید</Link>
            </LoginRoute>
          </LoginLink>
        </FormContainer>
      </SignupWrapper>
    </SingupContainer>
  );
};

export default Signup;
