import{v as m,u as g,r as c,k as t,j as n}from"./index-DyO4p5ke.js";import{P as h}from"./Pagination-CjITfJFb.js";const j=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 150px;
`,b=n.div`
  width: 100%;
  padding: 1rem 0;
`,y=n.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 10px 20px;
  background: var(--color-info);
  font-weight: 900;
  font-size: var(--font-size-xl);
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 12px;

  @media (max-width: 400px) {
    width: 100%;
    font-size: var(--font-size-md);
  }
`,k=n.span`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  @media (max-width: 768px) {
    display: none;
  }
`,l=n.div`
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  padding: 4px 10px;
  border-radius: 8px;
  background: ${e=>e.$active?"var(--color-primary)":"transparent"};
  color: ${e=>(e.$active,"var(--color-secondary)")};
  font-weight: ${e=>e.$active?"900":"700"};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`,N=n.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  gap: 1rem;
  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
    margin-bottom: 150px;
  }
`;function T(){const{news:e,getNewsLoading:p}=m(),{user:x}=g(),[w,s]=c.useState([]),[i,f]=c.useState("all"),[u,v]=c.useState(!1);c.useEffect(()=>{s(e||[])},[e]);const o=(d="all")=>{if(!(!e||e.length===0))switch(f(d),v(a=>!a),d){case"all":s(e);break;case"user-fav":{const a=x?.FavoritesTopic;s(a?e.filter(r=>r.NewsSubject===a):e);break}case"old-to-new":s([...e].sort((a,r)=>new Date(a.NewsDate)-new Date(r.NewsDate)));break;case"new-to-old":s([...e].sort((a,r)=>new Date(r.NewsDate)-new Date(a.NewsDate)));break;default:s(e)}};return t.jsx(j,{children:t.jsxs(b,{children:[t.jsxs(y,{children:[t.jsx(k,{children:"فیلتر کردن بر اساس :"}),t.jsx(l,{$active:i==="all",onClick:()=>o("all"),children:"همه"}),t.jsx(l,{$active:i==="user-fav",onClick:()=>o("user-fav"),children:"علاقه"}),t.jsx(l,{$active:i==="old-to-new",onClick:()=>o("old-to-new"),children:"قدیمی ترین"}),t.jsx(l,{$active:i==="new-to-old",onClick:()=>o("new-to-old"),children:"جدیدترین"})]}),t.jsx(N,{children:t.jsx(h,{newsList:w,getNewsLoading:p,resetPage:u})})]})})}export{T as default};
