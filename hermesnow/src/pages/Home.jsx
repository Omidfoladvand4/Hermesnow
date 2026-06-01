import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Sidebar from '../components/Sidebar'
import { supabase } from "../lib/supabaseClient";
import CategoryBoxs from "../components/CategoryBoxs";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonMenu from "../ui/menu/ButtonMenu";
const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
`
function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase.from("News").select("*");

      if (error) throw error;

      setNewsData(data || []);
    } catch (error) {
      console.error("خطا در دریافت اخبار:", error);
      setError("خطا در دریافت اخبار");
    } finally {
      setLoading(false);
    }
  };

  const getUniqueSubjects = () => {
    const subjects = [...new Set(newsData.map((news) => news.NewsSubject))];
    console.log("موضوعات یکتا:", subjects);
    return subjects;
  };
 return (
  <div>
    <Header />
    <Main>
      <ButtonMenu />
      <Sidebar />
    </Main>
  </div>
 )
}

export default Home;
