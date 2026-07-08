import{r as m,q as x,k as o,j as s,t as g,u as h,L as w,o as b}from"./index-Cqs05Bxx.js";import{c as y,b as d,d as v,u as j}from"./index.esm-DPEQo0gi.js";const z=()=>{const[e,i]=m.useState(!1),[l,c]=m.useState(null);return{signup:async r=>{i(!0),c(null);try{const{data:t,error:a}=await x.from("Users").select("*").or(`UserName.eq.${r.userName},UserEmail.eq.${r.email}`).single();if(a&&a.code!=="PGRST116")throw a;if(t){if(t.UserName===r.userName)throw new Error("این نام کاربری قبلاً ثبت شده است");if(t.UserEmail===r.email)throw new Error("این ایمیل قبلاً ثبت شده است")}const{data:f,error:u}=await x.from("Users").insert([{UserName:r.userName,UserEmail:r.email,UserPassword:r.password}]).select().single();if(u)throw u.code==="23505"?new Error("این نام کاربری یا ایمیل قبلاً ثبت شده است"):u;return{success:!0,user:f}}catch(t){const a=t.message||"خطا در ثبت‌نام";return c(a),{success:!1,error:a}}finally{i(!1)}},loading:e,error:l}},S=y({userName:d().min(3,"نام کاربری باید حداقل ۳ کاراکتر باشد").max(20,"نام کاربری نباید بیشتر از ۲۰ کاراکتر باشد").required("نام کاربری الزامی است").matches(/^[a-zA-Z0-9_]+$/,"نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و _ باشد"),email:d().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),password:d().min(6,"رمز عبور باید حداقل ۶ کاراکتر باشد").max(20,"رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد").required("رمز عبور الزامی است"),confirmPassword:d().oneOf([v("password")],"رمز عبور و تکرار آن باید یکسان باشد").required("تکرار رمز عبور الزامی است")}),E=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$=s.label`
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  font-weight: 900;
`,U=s.input`
  width: 90%;
  padding: 10px 12px;

  color: white;
  background: var(--color-info);

  border: 2px solid
    ${({$error:e})=>e?"var(--color-primary)":"transparent"};

  border-radius: 8px;

  transition: .25s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,N=s.span`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`;function p({id:e,label:i,type:l,placeholder:c,formik:n}){const r=n.touched[e]&&n.errors[e];return o.jsxs(E,{children:[o.jsx($,{htmlFor:e,children:i}),o.jsx(U,{id:e,name:e,type:l,placeholder:c,value:n.values[e],onChange:n.handleChange,onBlur:n.handleBlur,$error:r}),r&&o.jsx(N,{children:n.errors[e]})]})}const F=s.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 120;
  animation: ${b} 0.5s linear;
`,k=s.form`
  width: 45%;
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
`,q=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`;s.label`
  font-weight: bolder;
  color: var(--color-primary);
  display: block;
  font-size: var(--font-size-xl);
  font-weight: 900;
`;s.input`
  width: 90%;
  padding: 10px 5px;
  color: white;
  background-color: var(--color-info);
`;s.div`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`;const L=s.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 900;
  font-size: var(--font-size-xl);
  cursor: pointer;
  color: white;
  background: var(--color-primary);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,C=s.div`
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
  background: ${e=>e.type==="success"?"#f0f9ff":"#fef2f2"};
  color: ${e=>e.type==="success"?"#0369a1":"#dc2626"};
  border: 1px solid
    ${e=>e.type==="success"?"#bae6fd":"#fecaca"};
`,P=s.div`
  text-align: center;
  margin-top: 16px;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bolder;
  }
`,B=s.p`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 700;
`,I=()=>{const{signup:e,loading:i,error:l}=z(),c=g(),{login:n}=h(),r=j({initialValues:{userName:"",email:"",password:"",confirmPassword:""},validationSchema:S,onSubmit:async t=>{const a=await e(t);a.success&&(n(a.user),c("/"))}});return o.jsx(F,{children:o.jsxs(k,{onSubmit:r.handleSubmit,children:[l&&o.jsxs(C,{type:"error",children:["❌ ",l]}),o.jsx(p,{id:"userName",label:"نام کاربری",type:"text",placeholder:"example123",formik:r}),o.jsx(p,{id:"email",label:"ایمیل",type:"email",placeholder:"example@gmail.com",formik:r}),o.jsx(p,{id:"password",label:"رمز عبور",type:"password",placeholder:"••••••••",formik:r}),o.jsx(p,{id:"confirmPassword",label:"تکرار رمز عبور",type:"password",placeholder:"••••••••",formik:r}),o.jsxs(q,{children:[o.jsx(L,{type:"submit",disabled:i,children:i?"در حال ثبت‌ نام...":"ثبت‌ نام"}),o.jsx(P,{children:o.jsxs(B,{children:["حساب کاربری دارید؟ ",o.jsx(w,{to:"/login",children:"وارد شوید"})]})})]})]})})};export{I as default};
