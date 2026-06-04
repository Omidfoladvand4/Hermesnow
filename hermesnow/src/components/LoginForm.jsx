import { useFormik } from 'formik'
import * as Yup from  'yup'
import styled from 'styled-components'
import { useLogin } from '../hooks/useLogin'
import { Link } from "react-router-dom";

const  LoginWrapper = styled.form`
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
  color:  white;
  background-color: var(--color-accent);

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

 
`;
const SignupRoute = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-accent);
  font-weight: 700;
`;
const LoginFeild = () => {
    const { login , loading , error } = useLogin()
    const validationSchema  = Yup.object({
        email : Yup.string()
        .email('ایمیل معتبر نیست'),
        password : Yup.string()
        .min(6 , 'رمز عبور باید بیشتر از 6 کاراکتر باشد')
        .max(20 , 'رمز عبور نباید بیشتر از 20 کاراکتر باشد')
        .required('رمز عبور الزامی است'),
        userName : Yup.string()
         .min(3 , ' باید بیشتر از 3 کاراکتر باشد')
        .max(20 , ' نباید بیشتر از 20 کاراکتر باشد')
        .required('نام کاربری الزامی است')

    })

const formik = useFormik({
        initialValues: {
      userName : '' ,
      email: '',
      password: ''
    },
  validationSchema ,
  onSubmit : async (values) => {
    console.log('values'  , values);
    await login(values)
    
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
                    textAlign: 'center'
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
            placeholder='نام کاربری باید لاتین باشد مثل Ali '
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className={formik.touched.userName && formik.errors.userName ? 'error' : ''}
            
            />
            {formik.touched.userName && formik.errors.userName ? (
                <ErrorFelid >{formik.errors.userName}</ErrorFelid>

            ): null}
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
            className={formik.touched.password && formik.errors.password ? 'error' : ''}
            
            />
            {formik.touched.password && formik.errors.password ? (
                <ErrorFelid >{formik.errors.password}</ErrorFelid>

            ): null}
         </FormContainer>

        <FormContainer>
            <LabelFelid>ایمیل</LabelFelid>
            <InputFeild 
            id='email'
            name='email'
            type='email'
            placeholder='Ali@gmail.com'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={formik.touched.email && formik.errors.email ? 'error' : ''}
            
            />
            {formik.touched.email && formik.errors.email ? (
                <ErrorFelid >{formik.errors.email}</ErrorFelid>

            ): null}
         </FormContainer>

         <LoginButton  type='submit'  disabled= {loading} >
              {loading ? 'درحال ورود ...' : "ورود"  }
         </LoginButton>

          <LoginLink>
                 <SignupRoute>
                   حساب کاربری ندارید؟ <Link to="/signup">ثبت‌نام کنید</Link>
                 </SignupRoute>
               </LoginLink>
    </LoginWrapper>
  )}


export default LoginFeild