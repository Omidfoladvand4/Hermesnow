// hooks/useLogin.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../contexts/AuthContext'

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogin = async (userData) => {
        setLoading(true)
        setError(null)

        try {
            let query = supabase.from('Users').select('*')
            
            if (userData.userName) {
                query = query.eq('UserName', userData.userName)
            }

            const { data: existingUsers, error: checkError } = await query

            if (checkError) throw checkError

            let user

            if (existingUsers && existingUsers.length > 0) {
                user = existingUsers[0]
                if (user.UserPassword === userData.password) {
                    // پسورد درست
                } else {
                    throw new Error('رمز عبور اشتباه است')
                }
            } else {
            
                const { data: newUser, error: signUpError } = await supabase
                    .from('Users')
                    .insert([{
                        UserName: userData.userName,
                        UserEmail: userData.email,
                        UserPassword: userData.password
                    }])
                    .select()
                    .single()

                if (signUpError) throw signUpError
                user = newUser
            }

            login(user)
            navigate('/')

            return { success: true, user }

        } catch (err) {
            const errorMessage = err.message || 'خطا در ورود'
            setError(errorMessage)
            return { success: false, error: errorMessage }
        } finally {
            setLoading(false)
        }
    }

    return {
        login: handleLogin,
        loading,
        error
    }
}