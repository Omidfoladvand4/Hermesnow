import{v as w,u as p,r as u,k as e,C as f,b as h,j as s}from"./index-Cqs05Bxx.js";const m=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,j=s.div`
  width: 100%;
  padding: 1rem 0;
`,g=s.nav`
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
`,v=s.span`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  @media (max-width: 768px) {
    display: none;
  }
`,o=s.div`
  cursor: pointer;
  text-align: center;
`,N=s.div`
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 1rem auto;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 400px) {
    width: 100%;
  }
`;function b(){const{news:t,getNewsLoading:l}=w(),{user:c}=p(),[x,n]=u.useState([t]),r=(i="all")=>{switch(i){case"all":n(t);break;case"user-fav":n(t.filter(a=>a.NewsSubject===c?.FavoritesTopic));break;case"old-to-new":n([...t].sort((a,d)=>new Date(a.NewsDate)-new Date(d.NewsDate)));break;case"new-to-old":n([...t].sort((a,d)=>new Date(d.NewsDate)-new Date(a.NewsDate)));break;default:n(t)}};return e.jsx(m,{children:e.jsxs(j,{children:[e.jsxs(g,{children:[e.jsx(v,{children:" فیلتر کردن به اساس :"}),e.jsx(o,{onClick:()=>r(),children:"همه"}),e.jsxs(o,{onClick:()=>r("user-fav"),children:[" ","علاقه مندی"]}),e.jsx(o,{onClick:()=>r("old-to-new"),children:"قدیم به جدید"}),e.jsx(o,{onClick:()=>r("new-to-old"),children:"جدید به قدیم"})]}),e.jsx(N,{children:l?e.jsx(h,{}):x.map(i=>e.jsx(f,{news:i},i.id))})]})})}export{b as default};
