import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useUserManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteUser = async (userId, refetch) => {
    const id = String(userId)
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('Users')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      if (refetch) await refetch();
      return { success: true };
      
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const promoteToAdmin = async (userId, refetch) => {
    const id = String(userId)
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('Users')
        .update({ 
          IsAdmin: true,
          Roll: 'ادمین'
        })
        .eq('id', id);

      if (error) throw error;
      
      if (refetch) await refetch();
      return { success: true };
      
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const demoteFromAdmin = async (userId, refetch) => {
    const id = String(userId)
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('Users')
        .update({ 
          IsAdmin: false,
          Roll: 'معمولی'
        })
        .eq('id', id);

      if (error) throw error;
      
      if (refetch) await refetch();
      return { success: true };
      
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    deleteUser,
    promoteToAdmin,
    demoteFromAdmin
  };
};