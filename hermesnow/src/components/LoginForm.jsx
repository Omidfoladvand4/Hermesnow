import { useFormik } from 'formik'
import * as Yup from  'yup'
import styled from 'styled-components'
import { useLogin } from '../hooks/useLogin'

const  LoginWrapper = styled.form`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 15px 10px;
    flex-direction: column;
    border-radius: 12px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    margin-top: 10px;
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 15px;
`
const LabelFelid = styled.label`
   font-weight :  bolder;
   color:var(--color-secondary) ;
   display: block;
`
const InputFeild = styled.input`
    width: 90%;
    padding: 10px 5px;
    border-radius: 15px;
    background: var(--color-info);
    color: var(--color-primary);

`
const ErrorFelid = styled.div`
    color: red;
`

const LoginButton = styled.button`
    width: 120px;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 900;
    font-size: large;
    cursor: pointer;
    color: var(--color-info);
    box-shadow: 2px 2px 3px 1px #333333;
`

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
    </LoginWrapper>
  )}


export default LoginFeild