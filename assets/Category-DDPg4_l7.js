import{w as c,v as x,r as l,k as e,b as p,j as s}from"./index-DyO4p5ke.js";import{S as m}from"./Sidebar-DfP3ZK2M.js";import{P as g}from"./Pagination-CjITfJFb.js";const r=s.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,a=s.div`
  width: 100%;
  border-bottom: 1px solid var(--color-primary);
  text-align: center;
  font-size: var(--font-size-xxl);
  font-weight: 900;
`,f=s.div`
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
`,h=s.div`
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
`;function v(){const{subject:i}=c(),{news:t,loading:n}=x(),o=l.useMemo(()=>t?t.filter(d=>d.NewsSubject===i):[],[t,i]);return n||!t||t.length===0?e.jsxs(r,{children:[e.jsx(a,{children:i}),e.jsx(p,{})]}):e.jsxs(r,{children:[e.jsx(a,{children:i}),e.jsxs(f,{children:[e.jsx(m,{}),e.jsx(h,{children:e.jsx(g,{newsList:o,getNewsLoading:n,itemsPage:4})})]})]})}export{v as default};
