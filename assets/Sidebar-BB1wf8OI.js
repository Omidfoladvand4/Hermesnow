import{k as e,L as l,p as x,j as o,e as d,R as h,u as p,v,b as n,f as g}from"./index-BMiPOzSR.js";const f=o.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  border-bottom: 2px solid var(--color-primary);
  opacity: 0.8;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }
`,m=o.div`
  flex: 1;
`,j=o.div`
  color: white;
  font-size: var(--font-size-md);
  margin-bottom: 8px;
`,w=o.div`
  color: #9ca3af;
  font-size: var(--font-size-sm);
`,u=o.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
`;function c({item:s,to:t,hasImage:r=!0}){return e.jsx(l,{to:t,style:{textDecoration:"none"},children:e.jsxs(f,{children:[e.jsxs(m,{children:[e.jsx(j,{children:s.NewsTitle}),s.Journalist&&e.jsx(w,{children:s.Journalist})]}),r&&e.jsx(u,{src:s.MainImage||x})]})})}const b=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`,y=o.div`
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`,z=o.div`
  font-size: var(--font-size-md);
  font-weight: 900;
  color: white;
`,I=o.div`
  width: 100%;
`;function a({title:s,icon:t,children:r}){return e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(z,{children:s}),t]}),e.jsx(I,{children:r})]})}const S=d(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3zm-3-7V3.5L18.5 9z"})),k=d(e.jsx("path",{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17c-.16-.16-.42-.16-.58 0l-.88.88L20 12.75l.88-.88c.16-.16.16-.42 0-.58M11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"})),L=o.div`
  width: 30%;
  overflow-y: scroll;
  height: 100vh;
  background-color: var(--color-accent);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${g} 0.5s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  @media (max-width: 900px) {
    width: 100vw;
  }
`,R=o.div`
  display: flex;
  justify-content: center;
  font-size: var(--font-size-xl);
`,M=o.div`
  text-align: center;
  color: white;
`,H=o.div`
  width: 100%;
  padding: 10px 15px;
  border-radius: 12px;
  background: var(--color-accent);
`,N=o.h2`
  color: var(--color-primary);
`,A=o.h4`
  color: var(--color-secondary);
`,T=o.a`
  display: block;
  margin: 10px 0;
  padding: 8px;
  text-align: center;
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  text-decoration: none;
`,$=o.p`
  font-size: var(--font-size-base);
  color: var(--color-info);
`;function V(){const{user:s}=p(),{news:t}=v(),r=Array.isArray(t)&&t.length>0;return e.jsxs(L,{children:[e.jsx(R,{children:s?e.jsxs(M,{children:["سلام ",s.UserName," خوش آمدی"]}):e.jsxs(H,{children:[e.jsx(N,{children:"عضوی از وبسایت ما باشید"}),e.jsx(A,{children:"اگر هنوز ثبت نام نکردید همین حالا ثبت نام کنید"}),e.jsx(T,{href:"/signup",children:"ورود"}),e.jsx($,{children:"ورود یا ثبت نام شما به منزله‌ی موافقت با قوانین ماست."})]})}),e.jsx(a,{title:"یادداشت",icon:e.jsx(S,{style:{color:"white"}})}),r?t.map(i=>e.jsx(c,{item:i,to:`/news/${i.id}`},i.id)):e.jsx(n,{}),e.jsx(a,{title:"برگزیده‌ها",icon:e.jsx(k,{style:{color:"white"}})}),r?t.map(i=>e.jsx(c,{item:i,to:`/news/${i.id}`,hasImage:!1},i.id)):e.jsx(n,{})]})}const J=h.memo(V);export{J as S};
