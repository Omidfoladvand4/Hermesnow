// LoginFeild.jsx - با نام کاربری و رمز عبور
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { data, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom"
import { useState } from 'react'

const LoginWrapper = styled.form`
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
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`

const LabelFelid = styled.label`
  font-weight: bolder;
  color: var(--color-primary);
  display: block;
  font-size: var(--font-size-xl);
  font-weight: 900;
`

const InputFeild = styled.input`
  width: 90%;
  padding: 10px 5px;
  color: white;
  background-color: var(--color-accent);
  border: none;
  border-radius: 5px;
`

const ErrorFelid = styled.div`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`

const LoginButton = styled.button`
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
`

const LoginLink = styled.div`
  text-align: center;
  margin-top: 16px;
  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bolder;
  }
`

const SignupRoute = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-accent);
  font-weight: 700;
`

const LoginFeild = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, 'نام کاربری باید بیشتر از 3 کاراکتر باشد')
      .max(20, 'نام کاربری نباید بیشتر از 20 کاراکتر باشد')
      .required('نام کاربری الزامی است'),
    password: Yup.string()
      .min(6, 'رمز عبور باید بیشتر از 6 کاراکتر باشد')
      .max(20, 'رمز عبور نباید بیشتر از 20 کاراکتر باشد')
      .required('رمز عبور الزامی است'),
  })

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true)
      setError(null)
      
      try {

        const { data: users, error: findError } = await supabase
          .from('Users')
          .select('*')
          .eq('UserName', values.userName)
          .single()

        if (findError) throw new Error('کاربری با این نام کاربری یافت نشد')

        if (!users) throw new Error('کاربری با این نام کاربری یافت نشد')

        if (users.UserPassword !== values.password) {
          throw new Error('رمز عبور اشتباه است')
        }
        const {...currentUser} =  users
        login(currentUser)
        navigate('/')
        
      } catch (err) {
        setError(err.message || 'خطا در ورود')
      } finally {
        setLoading(false)
      }
    }
  })

  return (
    <LoginWrapper onSubmit={formik.handleSubmit}>
      {error && (
        <div style={{
          padding: '10px',
          background: '#f8d7da',
          color: '#721c24',
          borderRadius: '5px',
          textAlign: 'center',
          width: '100%'
        }}>
          {error}
        </div>
      )}

      <FormContainer>
        <LabelFelid>نام کاربری</LabelFelid>
        <InputFeild
          id='userName'
          name='userName'
          type='text'
          placeholder='نام کاربری خود را وارد کنید'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName && (
          <ErrorFelid>{formik.errors.userName}</ErrorFelid>
        )}
      </FormContainer>

      <FormContainer>
        <LabelFelid>رمز عبور</LabelFelid>
        <InputFeild
          id='password'
          name='password'
          type='password'
          placeholder='*********'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorFelid>{formik.errors.password}</ErrorFelid>
        )}
      </FormContainer>

      <LoginButton type='submit' disabled={loading}>
        {loading ? 'درحال ورود ...' : "ورود"}
      </LoginButton>

      <LoginLink>
        <SignupRoute>
          حساب کاربری ندارید؟ <Link to="/signup">ثبت‌نام کنید</Link>
        </SignupRoute>
      </LoginLink>
    </LoginWrapper>
  )
}

export default LoginFeild