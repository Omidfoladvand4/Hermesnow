import{w as o,v as d,r as c,k as e,b as x,L as l,j as t}from"./index-La17nL3v.js";import{S as p}from"./Sidebar-CAs183Ax.js";import{P as g}from"./Pagination-Dh6bnNjG.js";const m=t.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=t.div`
  width: 100%;
  border-bottom: 1px solid var(--color-primary);
  text-align: center;
  font-size: var(--font-size-xxl);
  font-weight: 900;
`,h=t.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding: 10px 30px;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
    gap: 0;
  }
`,w=t.div`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`,j=t.div`
  color: var(--color-primary);
  font-size: var(--font-size-xxl);
  text-align: center;
  padding: 50px;
  font-weight: 900;
`;function b(){const i=o().subject,{news:s,loading:n}=d(),r=c.useMemo(()=>s.filter(a=>a.NewsSubject===i),[s,i]);return n?e.jsx(x,{}):e.jsxs(m,{children:[e.jsx(f,{children:i}),r.length>0?e.jsxs(h,{children:[" ",e.jsx(p,{}),e.jsx(w,{children:e.jsx(g,{newsList:r,getNewsLoading:n,itemsPage:4})})," "]}):e.jsxs(j,{children:["هیچ خبری در دسته‌بندی (",i,") یافت نشد :"," ",e.jsx(l,{to:"/",children:"رفتن به صفحه اصلی"})]})]})}export{b as default};
