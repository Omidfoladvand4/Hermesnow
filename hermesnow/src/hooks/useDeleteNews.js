
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useDeleteNews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const extractPathFromUrl = (url) => {
    if (!url) return null;
    
    if (url.includes("/storage/v1/object/public/")) {
      const parts = url.split("/News_Images/");
      return parts[1] || null; 
    }
    
    return url;
  };

  const deleteNews = async ({ newsId }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { data: newsData, error: fetchError } = await supabase
        .from("News")
        .select("MainImage")
        .eq("id", newsId)
        .single();

      if (fetchError) {
        setError(fetchError.message);
        return { success: false, error: fetchError };
      }

      if (newsData?.MainImage) {
        const imagePath = extractPathFromUrl(newsData.MainImage);
        console.log("🖼️ مسیر استخراج شده:", imagePath);
        
        if (imagePath) {
          const {data ,  error: storageError } = await supabase.storage
            .from("News_Images") 
            .remove([imagePath]);
            console.log("Remove Data:", data);
            console.log("Remove Error:", error);

          if (storageError) {
            console.error(" خطا در حذف از استوریج:", storageError);
          } else {
            console.log(" عکس حذف شد");
          }
        }
      }

      const { error: deleteError } = await supabase
        .from("News")
        .delete()
        .eq("id", newsId);

      if (deleteError) {
        setError(deleteError.message);
        return { success: false, error: deleteError };
      }

      setSuccess(true);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  return { deleteNews, error, loading, success };
};