import React, { useState, useEffect } from 'react'
import Header from '../layout/Header'
import { supabase } from '../lib/supabaseClient'
import CategoryBoxs from '../components/CategoryBoxs'

function Home() {
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase
        .from('News')
        .select('*')
      
      if (error) throw error

      setNewsData(data || [])
       
    } catch (error) {
      console.error('خطا در دریافت اخبار:', error)
      setError('خطا در دریافت اخبار')
    } finally {
      setLoading(false)
    }
  }

  const getUniqueSubjects = () => {
    const subjects = [...new Set(newsData.map(news => news.NewsSubject))]
    console.log('موضوعات یکتا:', subjects)
    return subjects
  }

  if (loading) {
    return (
      <div>
        <Header />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          fontSize: '18px',
          color: '#666'
        }}>
          ⏳ در حال دریافت اخبار...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Header />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          fontSize: '18px',
          color: 'red'
        }}>
          ❌ {error}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      
      {newsData.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '50px',
          color: '#666',
          fontSize: '16px'
        }}>
          📭 هیچ خبری یافت نشد.
        </div>
      ) : (
        <>
          {getUniqueSubjects().map((subject, index) => (
            <CategoryBoxs 
              key={`${index}-${subject}`}
              datas={newsData} 
              subject={subject}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default Home