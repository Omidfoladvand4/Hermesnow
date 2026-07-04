import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export function useNews() {
  const [news, setNews] = useState([]);
  const [getNewsLoading, setgetNewsLoading] = useState(true);
  const [getNewsError, setgetNewsError] = useState(null);
  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      setgetNewsLoading(true);
      setgetNewsError(null);

      const { data, error: supabaseError } = await supabase
        .from("News")
        .select("*")
        .order("id", { ascending: false });

      if (supabaseError) {
        throw getNewsError;
      }

      setNews(data || []);
    } catch (err) {
      setgetNewsError(err.message);
    } finally {
      setgetNewsLoading(false);
    }
  }

  const Newsrefetch = () => {
    fetchNews();
  };

  return { news, Newsrefetch, getNewsError, getNewsLoading };
}
