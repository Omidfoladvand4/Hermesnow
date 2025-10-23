// components/Signup.jsx
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'
import Title from './Title'
import BackButton from './BackButton'

const SingupContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    background: url('./public/images/HermesNowBannar.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    z-index: 120;
`

const Navigations = styled.div`
    width: 100%;
    background-color: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 10px;
`

const SignupWrapper = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 15px 10px;
    border-radius: 12px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    margin-top: 10px;
`

const FormContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 15px;
`

const LabelFelid = styled.label`
    font-weight: bolder;
    color: var(--color-secondary);
    display: block;
`

const InputFeild = styled.input`
    width: 90%;
    padding: 10px 5px;
    border-radius: 15px;
    background: var(--color-info);
    color: var(--color-primary);
    border: 2px solid ${props => props.hasError ? 'red' : 'transparent'};
`

const ErrorFelid = styled.div`
    color: red;
    font-size: 0.8rem;
`

const SignupButton = styled.button`  
    width: 150px;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 900;
    font-size: 24px;
    cursor: pointer;
    color: var(--color-info);
    box-shadow: 2px 2px 3px 1px #333333;
    background: var(--color-secondary);
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

const Message = styled.div`
    padding: 12px 16px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
    background: ${props => props.type === 'success' ? '#f0f9ff' : '#fef2f2'};
    color: ${props => props.type === 'success' ? '#0369a1' : '#dc2626'};
    border: 1px solid ${props => props.type === 'success' ? '#bae6fd' : '#fecaca'};
`

const LoginLink = styled.div`
    text-align: center;
    margin-top: 15px;
    
    a {
        color: var(--color-secondary);
        text-decoration: none;
        font-weight: bold;
        
        &:hover {
            text-decoration: underline;
        }
    }
`

const Signup = () => {
    const { signup, loading, error } = useSignup()

    const validationSchema = Yup.object({
        userName: Yup.string()
            .min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد')
            .max(20, 'نام کاربری نباید بیشتر از ۲۰ کاراکتر باشد')
            .required('نام کاربری الزامی است')
            .matches(/^[a-zA-Z0-9_]+$/, 'نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و underline باشد'),
        email: Yup.string()
            .email('ایمیل معتبر نیست')
            .required('ایمیل الزامی است'),
        password: Yup.string()
            .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
            .max(20, 'رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد')
            .required('رمز عبور الزامی است'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'رمز عبور و تکرار آن باید یکسان باشد')
            .required('تکرار رمز عبور الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            await signup(values)
        }
    })

    return (
        <SingupContainer>
            <Navigations> 
                <Title titleName='ثبت نام' font='28px' color='var(--color-primary)'/> 
                <BackButton />  
            </Navigations>
            
            <SignupWrapper onSubmit={formik.handleSubmit}>
                {/* نمایش خطا از هوک */}
                {error && (
                    <Message type="error">
                        ❌ {error}
                    </Message>
                )}

                <FormContainer>
                    <LabelFelid>نام کاربری</LabelFelid>
                    <InputFeild 
                        id='userName'
                        name='userName'
                        type='text'
                        placeholder='example123'
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
                        id='email'
                        name='email'
                        type='email'
                        placeholder='example@gmail.com'
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
                        id='password'
                        name='password'
                        type='password'
                        placeholder='••••••••'
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
                        id='confirmPassword'
                        name='confirmPassword'
                        type='password'
                        placeholder='••••••••'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        hasError={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <ErrorFelid>{formik.errors.confirmPassword}</ErrorFelid>
                    )}
                </FormContainer>

                <FormContainer style={{alignItems: 'center'}}>
                    <SignupButton type='submit' disabled={loading}>
                        {loading ? 'در حال ثبت‌نام...' : "ثبت‌نام"}
                    </SignupButton>

                    <LoginLink>
                        <p>حساب کاربری دارید؟ <Link to="/login">وارد شوید</Link></p>
                    </LoginLink>
                </FormContainer>
            </SignupWrapper>
        </SingupContainer>
    )
}

export default Signup