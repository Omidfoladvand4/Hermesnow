import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import styled from "styled-components";

import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../contexts/AuthContext";
import { loginSchema } from "../validation/loginSchema";

const LoginWrapper = styled.form`
  width: 30%;
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
  flex-direction: column;
  gap: 10px;
`;

const LabelFelid = styled.label`
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
`;

const InputFeild = styled.input`
  width: 90%;
  padding: 10px 5px;
  color: white;
  background: var(--color-info);
  border: none;
  border-radius: 5px;
`;

const ErrorFelid = styled.div`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`;

const LoginButton = styled.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 900;
  font-size: var(--font-size-xl);
  color: white;
  background: var(--color-primary);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 16px;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
  }
`;

const SignupRoute = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 700;
`;

function LoginFeild() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,

   onSubmit: async (values) => {
  setLoading(true);
  setError("");

  try {
    const { data: user, error } = await supabase
      .from("Users")
      .select(`
        UserId,
        UserName,
        UserPassword,
        UserAge,
        IsAdmin,
        UserAvatar
      `)
      .eq("UserName", values.userName)
      .single();

    if (error || !user) {
      throw new Error("کاربری با این نام کاربری یافت نشد");
    }

    if (user.UserPassword !== values.password) {
      throw new Error("رمز عبور اشتباه است");
    }

    const {
      UserId,
      UserName,
      UserAvatar,
      IsAdmin,
      UserAge,
    } = user;

    login({
      UserId,
      UserName,
      UserAvatar,
      IsAdmin,
      UserAge,
    });

    navigate("/");
  } catch (err) {
    setError(err.message || "خطا در ورود");
  } finally {
    setLoading(false);
  }
}
  });

  return (
    <LoginWrapper onSubmit={formik.handleSubmit}>
      {error && (
        <ErrorFelid
          style={{
            width: "100%",
            textAlign: "center",
            padding: "10px",
            background: "#f8d7da",
            borderRadius: "5px",
          }}
        >
          {error}
        </ErrorFelid>
      )}

      <FormContainer>
        <LabelFelid htmlFor="userName">نام کاربری</LabelFelid>

        <InputFeild
          id="userName"
          name="userName"
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.userName && formik.errors.userName && (
          <ErrorFelid>{formik.errors.userName}</ErrorFelid>
        )}
      </FormContainer>

      <FormContainer>
        <LabelFelid htmlFor="password">رمز عبور</LabelFelid>

        <InputFeild
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.password && formik.errors.password && (
          <ErrorFelid>{formik.errors.password}</ErrorFelid>
        )}
      </FormContainer>

      <LoginButton type="submit" disabled={loading || !formik.isValid}>
        {loading ? "درحال ورود..." : "ورود"}
      </LoginButton>

      <LoginLink>
        <SignupRoute>
          حساب کاربری ندارید؟ <Link to="/signup">ثبت‌نام کنید</Link>
        </SignupRoute>
      </LoginLink>
    </LoginWrapper>
  );
}

export default LoginFeild;