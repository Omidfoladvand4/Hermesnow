import{w as o,v as d,r as x,k as e,b as c,C as p,L as l,j as t}from"./index-BMiPOzSR.js";import{S as g}from"./Sidebar-BB1wf8OI.js";const f=t.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,m=t.div`
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
  display: flex;
  gap: 30px;
  padding: 40px 20px;
  justify-items: center;

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
`;function y(){const i=o().subject,{news:n,loading:a}=d(),r=x.useMemo(()=>n.filter(s=>s.NewsSubject===i),[n,i]);return a?e.jsx(c,{}):e.jsxs(f,{children:[e.jsx(m,{children:i}),r.length>0?e.jsxs(h,{children:[" ",e.jsx(g,{}),e.jsx(w,{children:r.map(s=>e.jsx(p,{news:s},s.id))})," "]}):e.jsxs(j,{children:["هیچ خبری در دسته‌بندی (",i,") یافت نشد :"," ",e.jsx(l,{to:"/",children:"رفتن به صفحه اصلی"})]})]})}export{y as default};
