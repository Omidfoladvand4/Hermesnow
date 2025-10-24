import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'
import Navigations from '../components/Navigations'

const SettingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url('./public/images/HermesNowBannar.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

const Form = styled.div`
      width: 25%;
      display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 15px 10px;
    flex-direction: column;
    border-radius: 12px;
    backdrop-filter: blur(25px);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    margin-top: 10px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 15px;
  border: 2px solid var(--color-secondary);
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 15px;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  &.error {
    border-color: #e74c3c;
  }
`

const Label = styled.label`
  font-weight: bolder;
  color: var(--color-secondary);
  display: block;
  margin-bottom: 8px;
`

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-bottom: 15px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 15px;
`

const NextButton = styled.button`
  background: var(--color-primary);
  color:   var(--color-secondary);
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const PrevButton = styled.button`
  background: var(--color-secondary);
  color: var(--color-primary);
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
`

const SaveButton = styled.button`
  background: var(--color-accent);
  color: var(--color-secondary);
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
`

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
`

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.active ? 'var(--color-primary)' : 'var(--color-accent)'};
  color: ${props => props.active ? 'var(--color-secondary)' : '#666'};
  font-weight: bold;
`

function Setting() {
  const { user , updateUser } = useAuth()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    UserName: '',
    UserAge: '',
    UserCountry: '',
    UserEmail: '',
    UserPhone: '',
    FavoritesTopic: '',
    Gender: ''
  })

  const step1Schema = Yup.object({
    UserName: Yup.string()
      .required('نام کاربری الزامی است')
      .min(3, 'باید حداقل ۳ کاراکتر باشد')
      .max(20, 'نباید بیشتر از ۲۰ کاراکتر باشد'),
    UserAge: Yup.number()
      .typeError('سن باید عدد باشد')
      .min(1, 'سن باید بیشتر از ۰ باشد')
      .max(120, 'سن معتبر نیست'),
    UserCountry: Yup.string()
  })

  const step2Schema = Yup.object({
    UserEmail: Yup.string()
      .email('ایمیل معتبر نیست')
      .required('ایمیل الزامی است'),
    UserPhone: Yup.string()
      .matches(/^[0-9+-\s()]*$/, 'شماره تلفن معتبر نیست')
  })

  const step3Schema = Yup.object({
    FavoritesTopic: Yup.string()
      .min(3, 'باید حداقل ۳ کاراکتر باشد')
      .max(50, 'نباید بیشتر از ۵۰ کاراکتر باشد'),
    Gender: Yup.string()
      .required('جنسیت الزامی است')
  })

  const formik1 = useFormik({
    initialValues: {
      UserName: formData.UserName || '',
      UserAge: formData.UserAge || '',
      UserCountry: formData.UserCountry || ''
    },
    validationSchema: step1Schema,
    enableReinitialize: true
  })

  const formik2 = useFormik({
    initialValues: {
      UserEmail: formData.UserEmail || '',
      UserPhone: formData.UserPhone || ''
    },
    validationSchema: step2Schema,
    enableReinitialize: true
  })

  const formik3 = useFormik({
    initialValues: {
      FavoritesTopic: formData.FavoritesTopic || '',
      Gender: formData.Gender || ''
    },
    validationSchema: step3Schema,
    enableReinitialize: true
  })

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setFormData(prev => ({ ...prev, ...formik2.values }))
    } else if (currentStep === 3) {
      setFormData(prev => ({ ...prev, ...formik3.values }))
    }
    
    setCurrentStep(step => step > 1 ? step - 1 : step)
  }

  const handleNextStep = () => {
    if (currentStep === 1) {
      formik1.validateForm().then(errors => {
        if (Object.keys(errors).length === 0) {
          setFormData(prev => ({ ...prev, ...formik1.values }))
          setCurrentStep(2)
        }
      })
    } else if (currentStep === 2) {
      formik2.validateForm().then(errors => {
        if (Object.keys(errors).length === 0) {
          setFormData(prev => ({ ...prev, ...formik2.values }))
          setCurrentStep(3)
        }
      })
    }
  }

  const handleSave = async () => {
    setLoading(true)
    
    try {
      const errors = await formik3.validateForm()
      if (Object.keys(errors).length > 0) {
        return
      }

      // Combine all data
      const finalData = {
        ...formData,
        ...formik3.values
      }

      // Update in Supabase
      const { error } = await supabase
        .from('Users')
        .update(finalData)
        .eq('id', user.id)
       
      if (!error){
          localStorage.setItem('user', JSON.stringify({
      ...user,
      ...finalData
    }))
    updateUser(finalData)
    navigate('/account')

      }
      else{
            throw error ;
      } 
        
      
    } catch (error) {
      console.error('خطا در ذخیره اطلاعات:', error)
      alert('خطا در ذخیره اطلاعات')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div>
            <Label>نام کاربری</Label>
            <Input 
              name="UserName"
              type="text" 
              placeholder="نام کاربری"
              value={formik1.values.UserName}
              onChange={formik1.handleChange}
              onBlur={formik1.handleBlur}
              className={formik1.touched.UserName && formik1.errors.UserName ? 'error' : ''}
            />
            {formik1.touched.UserName && formik1.errors.UserName && (
              <ErrorMessage>{formik1.errors.UserName}</ErrorMessage>
            )}

            <Label>سن</Label>
            <Input 
              name="UserAge"
              type="number" 
              placeholder="سن"
              value={formik1.values.UserAge}
              onChange={formik1.handleChange}
              onBlur={formik1.handleBlur}
              className={formik1.touched.UserAge && formik1.errors.UserAge ? 'error' : ''}
            />
            {formik1.touched.UserAge && formik1.errors.UserAge && (
              <ErrorMessage>{formik1.errors.UserAge}</ErrorMessage>
            )}

            <Label>کشور</Label>
            <Input 
              name="UserCountry"
              type="text" 
              placeholder="کشور"
              value={formik1.values.UserCountry}
              onChange={formik1.handleChange}
              onBlur={formik1.handleBlur}
            />
          </div>
        )
      
      case 2:
        return (
          <div>
            <Label>ایمیل</Label>
            <Input 
              name="UserEmail"
              type="email" 
              placeholder="ایمیل"
              value={formik2.values.UserEmail}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              className={formik2.touched.UserEmail && formik2.errors.UserEmail ? 'error' : ''}
            />
            {formik2.touched.UserEmail && formik2.errors.UserEmail && (
              <ErrorMessage>{formik2.errors.UserEmail}</ErrorMessage>
            )}

            <Label>شماره تلفن</Label>
            <Input 
              name="UserPhone"
              type="tel" 
              placeholder="شماره تلفن"
              value={formik2.values.UserPhone}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
            />
          </div>
        )
      
      case 3:
        return (
          <div>
            <Label>موضوعات مورد علاقه</Label>
            <Input 
              name="FavoritesTopic"
              type="text" 
              placeholder="موضوعات مورد علاقه"
              value={formik3.values.FavoritesTopic}
              onChange={formik3.handleChange}
              onBlur={formik3.handleBlur}
            />

            <Label>جنسیت</Label>
            <Input 
              name="Gender"
              type="text" 
              placeholder="جنسیت"
              value={formik3.values.Gender}
              onChange={formik3.handleChange}
              onBlur={formik3.handleBlur}
              className={formik3.touched.Gender && formik3.errors.Gender ? 'error' : ''}
            />
            {formik3.touched.Gender && formik3.errors.Gender && (
              <ErrorMessage>{formik3.errors.Gender}</ErrorMessage>
            )}
          </div>
        )
      
      default:
        return null
    }
  }

  if (!user) {
    return <div>لطفا ابتدا وارد شوید</div>
  }

  return (
    <SettingContainer>
        <Navigations color={`var(--color-primary)`} font= '28px' titleName='تنظیمات' ></Navigations>
       <StepIndicator>
        <StepCircle active={currentStep >= 1}>1</StepCircle>
        <StepCircle active={currentStep >= 2}>2</StepCircle>
        <StepCircle active={currentStep >= 3}>3</StepCircle>
      </StepIndicator>

      <Form>
        {renderStep()}
        
        <ButtonContainer>
          {currentStep > 1 && (
            <PrevButton onClick={handlePrevStep}>
              قبلی
            </PrevButton>
          )}
          
          {currentStep < 3 ? (
            <NextButton 
              onClick={handleNextStep}
              disabled={loading}
            >
              بعدی
            </NextButton>
          ) : (
            <SaveButton 
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? 'در حال ذخیره...' : 'ذخیره'}
            </SaveButton>
          )}
        </ButtonContainer>
      </Form>
    </SettingContainer>
  )
}

export default Setting