import{v as p,u as f,r as c,k as t,j as i}from"./index-La17nL3v.js";import{P as u}from"./Pagination-Dh6bnNjG.js";const m=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,h=i.div`
  width: 100%;
  padding: 1rem 0;
`,g=i.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 10px 20px;
  background: var(--color-info);
  font-weight: 900;
  font-size: var(--font-size-xl);
  @media (max-width: 400px) {
    width: 100%;
    font-size: var(--font-size-md);
  }
`,j=i.span`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  @media (max-width: 768px) {
    display: none;
  }
`,o=i.div`
  cursor: pointer;
  text-align: center;
`,v=i.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 400px) {
    width: 100%;
    padding : 0 ;
    margin-bottom: 150px;
  }
`;function b(){const{news:e,getNewsLoading:l}=p(),{user:d}=f(),[w,n]=c.useState([]);c.useEffect(()=>{n(e||[])},[e]);const r=(x="all")=>{if(!(!e||e.length===0))switch(x){case"all":n(e);break;case"user-fav":{const s=d?.FavoritesTopic;n(s?e.filter(a=>a.NewsSubject===s):e);break}case"old-to-new":n([...e].sort((s,a)=>new Date(s.NewsDate)-new Date(a.NewsDate)));break;case"new-to-old":n([...e].sort((s,a)=>new Date(a.NewsDate)-new Date(s.NewsDate)));break;default:n(e)}};return t.jsx(m,{children:t.jsxs(h,{children:[t.jsxs(g,{children:[t.jsx(j,{children:"فیلتر کردن بر اساس :"}),t.jsx(o,{onClick:()=>r("all"),children:"همه"}),t.jsx(o,{onClick:()=>r("user-fav"),children:"علاقه‌مندی"}),t.jsx(o,{onClick:()=>r("old-to-new"),children:"قدیم به جدید"}),t.jsx(o,{onClick:()=>r("new-to-old"),children:"جدید به قدیم"})]}),t.jsx(v,{children:t.jsx(u,{newsList:w,getNewsLoading:l})})]})})}export{b as default};
