import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const login = async (userData) => {
        setLoading(true)
        setError(null)

        try {
            const { data: existingUser, error: checkError } = await supabase
                .from('Users')
                .select('*')
                .or(`UserName.eq.${userData.userName},UserEmail.eq.${userData.email}`)
                .single()

            if (checkError && checkError.code !== 'PGRST116') {
                throw checkError
            }

            let user

            if (existingUser) {
                if (existingUser.UserPassword === userData.password) {
                    user = existingUser
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate('/')
                } else {
                    throw new Error('رمز عبور اشتباه است')
                }
            }


            return { success: true, user }

        } catch (err) {
            const errorMessage = err.message || 'خطا در ارتباط با سرور'
            setError(errorMessage)
            return { success: false, error: errorMessage }
        } finally {
            setLoading(false)
        }
    }


    return {
        login,
        loading,
        error
    }
}