import{v as p,u as l,r as x,k as e,L as r,b as d,T as u,C as f,j as s,i as m}from"./index-Cqs05Bxx.js";import{G as g}from"./GoBackButton-ddGhSO_Q.js";const o=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`,w=s.div`
  width: 100%;
  padding: 2% 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  
  @media (max-width: 768px) {
      display: flex;
      gap: 6px;
      margin-top: 70px;
  }
`,j=s.div`
  width: 100vw;
  height: 80vh;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 400%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  justify-content: center;
  font-size: var(--font-size-md);
  animation: ${m} 0.8s infinite alternate;
  z-index: 9999;
`;s(r)`
  color: var(--color-primary);
`;function y(){const{news:n,getNewsLoading:a}=p(),{user:t}=l(),c=x.useMemo(()=>t?.FavoritesTopic?n.filter(i=>i.NewsSubject===t.FavoritesTopic):[],[n,t?.FavoritesTopic]);return t?.FavoritesTopic?a?e.jsx(d,{}):e.jsxs(o,{children:[e.jsx(u,{titleName:"خبر های شما "}),e.jsx(w,{children:c.map(i=>e.jsx(f,{news:i},i.id))})]}):e.jsx(o,{children:e.jsxs(j,{children:[e.jsx(r,{to:"/login",children:"برای استفاده از این بخش ابتدا باید وارد شوید یا علاقه‌مندی خود را در تنظیمات ثبت کنید."}),e.jsx(g,{})]})})}export{y as default};
