import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export function usegetRecomendedNews(subject) {
  const [getRecomendedNews, setGetRecomendedNews] = useState([]);
  const [getRecomendedNewsLoading, setGetRecomendedNewsLoading] = useState(true);
  const [getRecomendedNewsError, setGetRecomendedNewsError] = useState(null);

  useEffect(() => {
    if (subject) {
      fetchRecomendedNews();
    }
  }, [subject]);

  async function fetchRecomendedNews() {
    try {
      setGetRecomendedNewsLoading(true);
      setGetRecomendedNewsError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('News')
        .select('*');

      if (supabaseError) {
        throw supabaseError;
      }
      
      const filteredData = data?.filter((item) => {
        return item.NewsSubject === subject;
      }) || [];
      
      setGetRecomendedNews(filteredData);
      
    } catch (err) {
      setGetRecomendedNewsError(err.message);
      console.error('خطا در دریافت اخبار:', err);
    } finally {
      setGetRecomendedNewsLoading(false);
    }
  }

  const Newsrefetch = () => {
    fetchRecomendedNews();
  };

  return { 
    getRecomendedNews, 
    Newsrefetch, 
    getRecomendedNewsLoading, 
    getRecomendedNewsError 
  };
}