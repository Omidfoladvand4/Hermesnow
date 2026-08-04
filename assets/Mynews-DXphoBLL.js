import{x as p,v as l,r as d,l as e,L as r,b as x,T as u,k as i,j as f}from"./index-zSa54wSk.js";import{G as m}from"./GoBackButton-BSNzsOuw.js";import{P as g}from"./Pagination-CoJ85asX.js";const o=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`,w=i.div`
  width: 90%;
  padding: 2% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  
  @media (max-width: 768px) {
     width:  100%;
      display: flex;
      gap: 6px;
      margin-top: 70px;
  }
`,j=i.div`
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
  animation: ${f} 0.8s infinite alternate;
  z-index: 9999;
`;i(r)`
  color: var(--color-primary);
`;function N(){const{news:s,getNewsLoading:n}=p(),{user:t}=l(),a=d.useMemo(()=>t?.FavoritesTopic?s.filter(c=>c.NewsSubject===t.FavoritesTopic):[],[s,t?.FavoritesTopic]);return t?.FavoritesTopic?n?e.jsx(x,{}):e.jsxs(o,{children:[e.jsx(u,{titleName:"خبر های شما "}),e.jsx(w,{children:e.jsx(g,{newsList:a,getNewsLoading:n,itemsPage:6})})]}):e.jsx(o,{children:e.jsxs(j,{children:[e.jsx(r,{to:"/login",children:"برای استفاده از این بخش ابتدا باید وارد شوید یا علاقه‌مندی خود را در تنظیمات ثبت کنید."}),e.jsx(m,{})]})})}export{N as default};
