import{k as r,A as x,j as i,u as f,N as m,T as a,L as p,g as c,o as g,s as h}from"./index-DxluskjS.js";const v=i.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: cover;
  border-radius: 50%;
`;function u({src:e,size:t=150,alt:s="User Avatar"}){return e?r.jsx(v,{src:e,alt:s,size:t}):r.jsx(x,{sx:{fontSize:t}})}const j=i.main`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-rows: 2fr 1fr;
  gap: 25px;
  padding: 5% 15%;
  animation: ${g} 0.5s linear;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`,o=i.div`
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
`,b=i(o)`
  grid-row: 1/3;
  background-color: var(--color-accent);
`,w=i.div`
  font-size: var(--font-size-md);
  font-weight: 600;
`,y=i.i`
  font-size: var(--font-size-md);
`,z=i(o)`
  font-size: var(--font-size-md);
  background-color: var(--color-accent);
`,n=i.div`
  display: flex;
  gap: 8px;
  font-size: var(--font-size-md);
`,U=i.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`,A=i.button`
  background-color: var(--color-primary);
  padding: 15px 45px;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
  margin: 15px;
`,I=i(o)`
  font-size: var(--font-size-xl);
  padding: 5px;
  background-color: var(--color-accent);
  overflow: hidden;
`,N=i.div`
  display: flex;
  gap: 10px;
`,l=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(#d4d4d4, transparent);
  animation: ${h} 0.3s ease-in;
`,k=i(o)`
  grid-column: 1/-1;
  background-color: var(--color-accent);
  margin-bottom: 80px;
`,d=i.div`
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 10px;
`,C=i.div`
  text-align: center;
  padding: 50px;
  font-size: var(--font-size-md);
`;function S(){const{user:e,isAuthenticated:t,loading:s}=f();return s?r.jsx(r.Fragment,{children:r.jsx(C,{children:"در حال بارگذاری..."})}):!t||!e?r.jsx(m,{to:"/login",replace:!0}):r.jsxs(j,{children:[r.jsxs(b,{children:[r.jsx(u,{AvatarSrc:e.Avatar}),r.jsx(w,{children:e.UserName||"نامشخص"}),r.jsxs(y,{children:["User_ID:@hermes",e.UserId||e.id||"شناسه نامشخص"]})]}),r.jsxs(z,{children:[r.jsx(d,{children:r.jsx(a,{color:"var(--color-primary)",titleName:"اطلاعات شخصی",font:"var(--font-size-xl)"})}),r.jsxs(U,{children:[r.jsxs(n,{children:["نام کامل: ",e.UserName||"نامشخص"]}),r.jsxs(n,{children:["سن: ",e.UserAge||"ثبت نشده"]}),r.jsxs(n,{children:["کشور: ",e.UserCountry||"ثبت نشده"]}),r.jsxs(n,{children:["ایمیل: ",e.UserEmail||"ثبت نشده"]}),r.jsx(n,{children:"رمز عبور: *********"}),r.jsxs(n,{children:["موضوع مورد علاقه: ",e.FavoritesTopic||"مشخص نشده"]}),r.jsx(p,{to:"/settings",children:r.jsx(A,{children:"رفتن به تنظیمات "})})]})]}),r.jsxs(I,{children:[r.jsx(d,{children:r.jsx(a,{color:"var(--color-primary)",titleName:"فعالیت ها",font:"var(--font-size-xl)"})}),r.jsxs(N,{children:[r.jsx(l,{title:"خبر های خوانده شده",children:c(1555)}),r.jsx(l,{title:"تعداد کامنت ها",children:c(4258)}),r.jsx(l,{title:"خبر های ذخیره شده",children:c(152)})]})]}),r.jsx(k,{children:r.jsx(d,{children:r.jsx(a,{color:"var(--color-primary)",titleName:"خبرهای ذخیره شده",font:"var(--font-size-xl)"})})})]})}export{S as default};
