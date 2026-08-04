import{r as c,w as N,v as L,l as e,L as k,k as o,t as z,q as S}from"./index-DQF0V2hB.js";import{c as F,b as p,u as C}from"./index.esm-CbiNjkhP.js";const U=F({userName:p().min(3,"نام کاربری باید بیشتر از 3 کاراکتر باشد").max(20,"نام کاربری نباید بیشتر از 20 کاراکتر باشد").required("نام کاربری الزامی است"),password:p().min(6,"رمز عبور باید بیشتر از 6 کاراکتر باشد").max(20,"رمز عبور نباید بیشتر از 20 کاراکتر باشد").required("رمز عبور الزامی است")}),E=o.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,A=o.form`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 10px;
  background-color: var(--color-accent);
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,u=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,h=o.label`
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
`,m=o.input`
  width: 90%;
  padding: 10px 5px;
  color: white;
  background: var(--color-info);
  border: none;
  border-radius: 5px;
`,s=o.div`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`,B=o.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 900;
  font-size: var(--font-size-xl);
  color: white;
  background: var(--color-primary);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,q=o.div`
  text-align: center;
  margin-top: 16px;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
  }
`,I=o.p`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 700;
`;function R(){const[a,i]=c.useState(!1),[t,d]=c.useState(""),x=N(),{login:g}=L(),r=C({initialValues:{userName:"",password:""},validationSchema:U,onSubmit:async l=>{i(!0),d("");try{const{data:n,error:f}=await z.from("Users").select("*").eq("UserName",l.userName).single();if(f||!n)throw new Error("کاربری با این نام کاربری یافت نشد");if(n.UserPassword!==l.password)throw new Error("رمز عبور اشتباه است");const{UserId:w,UserName:v,UserAvatar:b,IsAdmin:j,UserAge:y}=n;g({UserId:w,UserName:v,UserAvatar:b,IsAdmin:j,UserAge:y}),x("/")}catch(n){d(n.message||"خطا در ورود")}finally{i(!1)}}});return e.jsx(E,{children:e.jsxs(A,{onSubmit:r.handleSubmit,children:[t&&e.jsx(s,{style:{width:"100%",textAlign:"center",padding:"10px",background:"#f8d7da",borderRadius:"5px"},children:t}),e.jsxs(u,{children:[e.jsx(h,{htmlFor:"userName",children:"نام کاربری"}),e.jsx(m,{id:"userName",name:"userName",type:"text",placeholder:"نام کاربری خود را وارد کنید",value:r.values.userName,onChange:r.handleChange,onBlur:r.handleBlur}),r.touched.userName&&r.errors.userName&&e.jsx(s,{children:r.errors.userName})]}),e.jsxs(u,{children:[e.jsx(h,{htmlFor:"password",children:"رمز عبور"}),e.jsx(m,{id:"password",name:"password",type:"password",placeholder:"********",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur}),r.touched.password&&r.errors.password&&e.jsx(s,{children:r.errors.password})]}),e.jsx(B,{type:"submit",disabled:a||!r.isValid,children:a?"درحال ورود...":"ورود"}),e.jsx(q,{children:e.jsxs(I,{children:["حساب کاربری ندارید؟ ",e.jsx(k,{to:"/signup",children:"ثبت‌نام کنید"})]})})]})})}const $=o.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  margin-top: 0;
  animation: ${S} 0.5s linear;
`;function W(){return e.jsx($,{children:e.jsx(R,{})})}export{W as default};
