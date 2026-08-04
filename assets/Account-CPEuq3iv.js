import{l as r,A as m,k as i,v as f,N as p,T as c,u as o,L as g,h as l,q as h,s as v}from"./index-zSa54wSk.js";const u=i.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: cover;
  border-radius: 50%;
`;function j({src:e,size:t=150,alt:a="User Avatar"}){return e?r.jsx(u,{src:e,alt:a,size:t}):r.jsx(m,{sx:{fontSize:t}})}const b=i.main`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-rows: 2fr 1fr;
  gap: 25px;
  padding: 5% 15%;
  animation: ${h} 0.5s linear;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`,s=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.8);
  font-weight: 900;
  cursor: pointer;
  border-radius: 15px;
  color: var(--color-info);
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.01);
    border-radius: 1px;
  }
  @media (max-width: 1000px) {
    width: 90vw;
    padding: 5px 0;
  }
`,w=i(s)`
  grid-row: 1/3;
  background-color: var(--color-accent);
`,y=i.div`
  font-size: var(--font-size-md);
  font-weight: 600;
`,z=i.i`
  font-size: var(--font-size-md);
`,U=i(s)`
  font-size: var(--font-size-md);
  background-color: var(--color-accent);
`,n=i.div`
  display: flex;
  gap: 8px;
  font-size: var(--font-size-md);
`,A=i.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`,N=i.button`
  background-color: var(--color-primary);
  padding: 15px 45px;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
  margin: 15px;
`,I=i(s)`
  font-size: var(--font-size-xl);
  padding: 5px;
  background-color: var(--color-accent);
  overflow: hidden;
`,k=i.div`
  display: flex;
  gap: 10px;
`,d=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(#d4d4d4, transparent);
  animation: ${v} 0.3s ease-in;
`,C=i(s)`
  grid-column: 1/-1;
  background-color: var(--color-accent);
  margin-bottom: 80px;
`,x=i.div`
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 10px;
`,B=i.div`
  text-align: center;
  padding: 50px;
  font-size: var(--font-size-md);
`;function T(){const{user:e,isAuthenticated:t,loading:a}=f();return a?r.jsx(r.Fragment,{children:r.jsx(B,{children:"در حال بارگذاری..."})}):!t||!e?r.jsx(p,{to:"/login",replace:!0}):r.jsxs(b,{children:[r.jsxs(w,{children:[r.jsx(j,{AvatarSrc:e.Avatar}),r.jsx(y,{children:e.UserName||"نامشخص"}),r.jsxs(z,{children:["User_ID:@hermes",e.UserId||e.id||"شناسه نامشخص"]})]}),r.jsxs(U,{children:[r.jsx(x,{children:r.jsx(c,{color:"var(--color-primary)",titleName:"اطلاعات شخصی",font:"var(--font-size-xl)"})}),r.jsxs(A,{children:[r.jsxs(n,{children:["نام کامل: ",e.UserName||"نامشخص"]}),r.jsxs(n,{children:["سن: ",o(e.UserAge)||"ثبت نشده"]}),r.jsxs(n,{children:["کشور: ",e.UserCountry||"ثبت نشده"]}),r.jsxs(n,{children:["ایمیل: ",e.UserEmail||"ثبت نشده"]}),r.jsx(n,{children:"رمز عبور: *********"}),r.jsxs(n,{children:["موضوع مورد علاقه: ",e.FavoritesTopic||"مشخص نشده"]}),r.jsx(g,{to:"/settings",children:r.jsx(N,{children:"رفتن به تنظیمات "})})]})]}),r.jsxs(I,{children:[r.jsx(x,{children:r.jsx(c,{color:"var(--color-primary)",titleName:"فعالیت ها",font:"var(--font-size-xl)"})}),r.jsxs(k,{children:[r.jsx(d,{title:"خبر های خوانده شده",children:o(l(1555))}),r.jsx(d,{title:"تعداد کامنت ها",children:o(l(4258))}),r.jsx(d,{title:"خبر های ذخیره شده",children:o(l(152))})]})]}),r.jsx(C,{children:r.jsx(x,{children:r.jsx(c,{color:"var(--color-primary)",titleName:"خبرهای ذخیره شده",font:"var(--font-size-xl)"})})})]})}export{T as default};
