import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient' 

export function useUsers() {
  const [users, setUsers] = useState([])
  const [getUserLoading, setgetUserLoading] = useState(true)
  const [getUserError, setgetUserError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      setgetUserLoading(true)
      setgetUserError(null)
      
      const { data, getUserError } = await supabase
        .from('Users')
        .select('*')

      if (getUserError) {
        throw getUserError
      }

      setUsers(data || [])
    } catch (err) {
      setgetUserError(err.message)
      console.getUserError('خطا در دریافت کاربران:', err)
    } finally {
      setgetUserLoading(false)
    }
  }

  const refetch = () => {
    fetchUsers()
  }

  return { users, getUserLoading, getUserError, refetch }
}