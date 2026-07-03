import { useFormik } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { signupSchema } from "../validation/signupSchema";
import { slideInStagger } from "../styles/animations";
import FormField from "./FormField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const SingupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 120;
  animation: ${slideInStagger} 0.5s linear;
`;

const SignupWrapper = styled.form`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 10px;
  background-color: var(--color-accent);
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  color: white;
  background-color: var(--color-info);
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
  color: var(--color-info);
  font-weight: 700;
`;

const Signup = () => {
  const { signup, loading, error } = useSignup();
  const navigate = useNavigate();
const { login } = useAuth();

    
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema : signupSchema,
    onSubmit: async (values) => {
   const result = await signup(values);

if (result.success) {
    login(result.user);
    navigate("/");
}
    },
  });

  return (
    <SingupContainer>
      <SignupWrapper onSubmit={formik.handleSubmit}>
        {error && <Message type="error">❌ {error}</Message>}

        <FormField
    id="userName"
    label="نام کاربری"
    type="text"
    placeholder="example123"
    formik={formik}
/>

<FormField
    id="email"
    label="ایمیل"
    type="email"
    placeholder="example@gmail.com"
    formik={formik}
/>

<FormField
    id="password"
    label="رمز عبور"
    type="password"
    placeholder="••••••••"
    formik={formik}
/>

<FormField
    id="confirmPassword"
    label="تکرار رمز عبور"
    type="password"
    placeholder="••••••••"
    formik={formik}
/>

        <FormContainer>
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
