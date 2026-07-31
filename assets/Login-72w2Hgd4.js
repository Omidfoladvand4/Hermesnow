import{r as c,t as N,u as U,k as e,L,j as o,q as k,o as z}from"./index-DyO4p5ke.js";import{c as S,b as p,u as A}from"./index.esm-D6qc3Tqn.js";const F=S({userName:p().min(3,"نام کاربری باید بیشتر از 3 کاراکتر باشد").max(20,"نام کاربری نباید بیشتر از 20 کاراکتر باشد").required("نام کاربری الزامی است"),password:p().min(6,"رمز عبور باید بیشتر از 6 کاراکتر باشد").max(20,"رمز عبور نباید بیشتر از 20 کاراکتر باشد").required("رمز عبور الزامی است")}),C=o.form`
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
`,m=o.label`
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
`,x=o.input`
  width: 90%;
  padding: 10px 5px;
  color: white;
  background: var(--color-info);
  border: none;
  border-radius: 5px;
`,a=o.div`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`,E=o.button`
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
`,I=o.div`
  text-align: center;
  margin-top: 16px;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
  }
`,B=o.p`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 700;
`;function q(){const[n,t]=c.useState(!1),[i,d]=c.useState(""),h=N(),{login:g}=U(),r=A({initialValues:{userName:"",password:""},validationSchema:F,onSubmit:async l=>{t(!0),d("");try{const{data:s,error:f}=await k.from("Users").select(`
        UserId,
        UserName,
        UserPassword,
        UserAge,
        IsAdmin,
        UserAvatar
      `).eq("UserName",l.userName).single();if(f||!s)throw new Error("کاربری با این نام کاربری یافت نشد");if(s.UserPassword!==l.password)throw new Error("رمز عبور اشتباه است");const{UserId:w,UserName:b,UserAvatar:v,IsAdmin:j,UserAge:y}=s;g({UserId:w,UserName:b,UserAvatar:v,IsAdmin:j,UserAge:y}),h("/")}catch(s){d(s.message||"خطا در ورود")}finally{t(!1)}}});return e.jsxs(C,{onSubmit:r.handleSubmit,children:[i&&e.jsx(a,{style:{width:"100%",textAlign:"center",padding:"10px",background:"#f8d7da",borderRadius:"5px"},children:i}),e.jsxs(u,{children:[e.jsx(m,{htmlFor:"userName",children:"نام کاربری"}),e.jsx(x,{id:"userName",name:"userName",type:"text",placeholder:"نام کاربری خود را وارد کنید",value:r.values.userName,onChange:r.handleChange,onBlur:r.handleBlur}),r.touched.userName&&r.errors.userName&&e.jsx(a,{children:r.errors.userName})]}),e.jsxs(u,{children:[e.jsx(m,{htmlFor:"password",children:"رمز عبور"}),e.jsx(x,{id:"password",name:"password",type:"password",placeholder:"********",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur}),r.touched.password&&r.errors.password&&e.jsx(a,{children:r.errors.password})]}),e.jsx(E,{type:"submit",disabled:n||!r.isValid,children:n?"درحال ورود...":"ورود"}),e.jsx(I,{children:e.jsxs(B,{children:["حساب کاربری ندارید؟ ",e.jsx(L,{to:"/signup",children:"ثبت‌نام کنید"})]})})]})}const P=o.main`
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
  animation: ${z} 0.5s linear;
`;function V(){return e.jsx(P,{children:e.jsx(q,{})})}export{V as default};
