import { useState } from "react";
import { supabase } from "../lib/supabaseClient";



export const useDeleteNews = () => {
   const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  const deleteNews =   async ({ newsId }) => {

        setLoading(true);
        setError(null);
        setSuccess(false);

    try {
        const { data , error } = await supabase 
        .from('News')
        .delete()
        .eq('id' , newsId);

        if(error) {
                setError(error.message);
                console.log('خطا در حذف خبر', error);
                console.log(data);
                
                 return { success: false, error };
                
            
        }

            setSuccess(true);
            console.log('خبر با موفقیت حذف شد', data);
            return { success: true, data };

        
    }
    catch(err){
            setError(err.message);
            console.error('خطای غیرمنتظره:', err);
            return { success: false, error: err };

       
    }finally {
        setLoading(false)
    }
    
}
return { deleteNews , error  , loading , success}
}







