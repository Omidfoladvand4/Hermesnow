import{u as F,t as G,r as v,k as e,o as w,j as t,q as $}from"./index-DzrAkb7D.js";import{c as U,b as h,a as T,u as f}from"./index.esm-Dm14Bu0w.js";const q=t.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${w} 0.5s linear;
`,I=t.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 15px 10px;
  flex-direction: column;
  background-color: var(--color-accent);
  margin-top: 10px;
  @media (max-width: 820px) {
    width: 100%;
    padding: 12px 4px;
  }
`,d=t.input`
  width: 100%;
  min-width: 300px;
  padding: 8px 15px;
  border: 2px solid var(--color-secondary);
  border-radius: 8px;
  font-size: var(--font-size-sm);
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &.error {
    border-color: #e74c3c;
  }
`,c=t.label`
  font-weight: bolder;
  color: var(--color-primary);
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
  font-size: var(--font-size-xl);
`,m=t.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-bottom: 15px;
`,O=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 15px;
`,R=t.button`
  background: var(--color-primary);
  color: var(--color-secondary);
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: var(--font-size-xl);
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,D=t.button`
  background: var(--color-secondary);
  color: var(--color-primary);
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: var(--font-size-xl);
  font-weight: 900;
  cursor: pointer;
`,V=t.button`
  background: red;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: var(--font-size-xl);
  font-weight: 900;
  cursor: pointer;
`,L=t.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
  animation: ${w} 0.5s linear;
`,j=t.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${n=>n.$active?"var(--color-primary)":"var(--color-info)"};
  color: white;
  font-weight: bold;
`;function H(){const{user:n,updateUser:C}=F(),S=G(),[i,x]=v.useState(1),[g,y]=v.useState(!1),[l,p]=v.useState({UserName:n?.UserName||"",UserAge:n?.UserAge||"",UserCountry:n?.UserCountry||"",UserEmail:n?.UserEmail||"",UserPhone:n?.UserPhone||"",UserPassword:n?.UserPassword||"",FavoritesTopic:n?.UserFavoritesTopic||"",Gender:n?.Gender||""}),N=U({UserName:h().required("نام کاربری الزامی است").min(3,"باید حداقل ۳ کاراکتر باشد").max(20,"نباید بیشتر از ۲۰ کاراکتر باشد"),UserAge:T().typeError("سن باید عدد باشد").min(1,"سن باید بیشتر از ۰ باشد").max(120,"سن معتبر نیست"),UserCountry:h()}),P=U({UserPassword:h().min(6,"باید بیشتر از 6 کاراکتر باشد").max(20,"نباید بیشتر از 20 کاراکتر باشد"),UserEmail:h().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),UserPhone:h().matches(/^[0-9+-\s()]*$/,"شماره تلفن معتبر نیست")}),B=U({FavoritesTopic:h().min(3,"باید حداقل ۳ کاراکتر باشد").max(50,"نباید بیشتر از ۵۰ کاراکتر باشد"),Gender:h().required("جنسیت الزامی است")}),s=f({initialValues:{UserName:l.UserName||"",UserAge:l.UserAge||"",UserCountry:l.UserCountry||""},validationSchema:N,enableReinitialize:!0}),r=f({initialValues:{UserPassword:l.UserPassword||"",UserEmail:l.UserEmail||"",UserPhone:l.UserPhone||""},validationSchema:P,enableReinitialize:!0}),o=f({initialValues:{FavoritesTopic:l.FavoritesTopic||"",Gender:l.Gender||""},validationSchema:B,enableReinitialize:!0}),k=()=>{i===2?p(a=>({...a,...r.values})):i===3&&p(a=>({...a,...o.values})),x(a=>a>1?a-1:a)},E=()=>{i===1?s.validateForm().then(a=>{Object.keys(a).length===0&&(p(u=>({...u,...s.values})),x(2))}):i===2&&r.validateForm().then(a=>{Object.keys(a).length===0&&(p(u=>({...u,...r.values})),x(3))})},z=async()=>{y(!0);try{const a=await o.validateForm();if(Object.keys(a).length>0)return;const u={...l,...o.values},{error:b}=await $.from("Users").update(u).eq("id",n.id);if(!b)localStorage.setItem("user",JSON.stringify({...n,...u})),C(u),S("/account");else throw b}catch(a){console.error("خطا در ذخیره اطلاعات:",a),alert("خطا در ذخیره اطلاعات")}finally{y(!1)}},A=()=>{switch(i){case 1:return e.jsxs("div",{children:[e.jsx(c,{children:"نام کاربری"}),e.jsx(d,{name:"UserName",type:"text",placeholder:"نام کاربری",value:s.values.UserName,onChange:s.handleChange,onBlur:s.handleBlur,className:s.touched.UserName&&s.errors.UserName?"error":""}),s.touched.UserName&&s.errors.UserName&&e.jsx(m,{children:s.errors.UserName}),e.jsx(c,{children:"سن"}),e.jsx(d,{name:"UserAge",type:"number",placeholder:"سن",value:s.values.UserAge,onChange:s.handleChange,onBlur:s.handleBlur,className:s.touched.UserAge&&s.errors.UserAge?"error":""}),s.touched.UserAge&&s.errors.UserAge&&e.jsx(m,{children:s.errors.UserAge}),e.jsx(c,{children:"کشور"}),e.jsx(d,{name:"UserCountry",type:"text",placeholder:"کشور",value:s.values.UserCountry,onChange:s.handleChange,onBlur:s.handleBlur})]});case 2:return e.jsxs("div",{children:[e.jsx(c,{children:"رمز عبور"}),e.jsx(d,{name:"UserPassword",type:"text",placeholder:"رمز عبور",value:r.values.UserPassword,onChange:r.handleChange,onBlur:r.handleBlur,className:r.touched.UserPassword&&r.errors.UserPassword?"error":""}),r.touched.UserPassword&&r.errors.UserPassword&&e.jsx(m,{children:r.errors.UserPassword}),e.jsx(c,{children:"ایمیل"}),e.jsx(d,{name:"UserEmail",type:"email",placeholder:"ایمیل",value:r.values.UserEmail,onChange:r.handleChange,onBlur:r.handleBlur,className:r.touched.UserEmail&&r.errors.UserEmail?"error":""}),r.touched.UserEmail&&r.errors.UserEmail&&e.jsx(m,{children:r.errors.UserEmail}),e.jsx(c,{children:"شماره تلفن"}),e.jsx(d,{name:"UserPhone",type:"tel",placeholder:"شماره تلفن",value:r.values.UserPhone,onChange:r.handleChange,onBlur:r.handleBlur})]});case 3:return e.jsxs("div",{children:[e.jsx(c,{children:"موضوعات مورد علاقه"}),e.jsx(d,{name:"FavoritesTopic",type:"text",placeholder:"موضوعات مورد علاقه",value:o.values.FavoritesTopic,onChange:o.handleChange,onBlur:o.handleBlur}),e.jsx(c,{children:"جنسیت"}),e.jsx(d,{name:"Gender",type:"text",placeholder:"جنسیت",value:o.values.Gender,onChange:o.handleChange,onBlur:o.handleBlur,className:o.touched.Gender&&o.errors.Gender?"error":""}),o.touched.Gender&&o.errors.Gender&&e.jsx(m,{children:o.errors.Gender})]});default:return null}};return n?e.jsxs(q,{children:[e.jsxs(L,{children:[e.jsx(j,{$active:i>=1,children:"1"}),e.jsx(j,{$active:i>=2,children:"2"}),e.jsx(j,{$active:i>=3,children:"3"})]}),e.jsxs(I,{children:[A(),e.jsxs(O,{children:[i>1&&e.jsx(D,{onClick:k,children:"قبلی"}),i<3?e.jsx(R,{onClick:E,disabled:g,children:"بعدی"}):e.jsx(V,{onClick:z,disabled:g,children:g?"در حال ذخیره...":"ذخیره"})]})]})]}):e.jsx("div",{children:"لطفا ابتدا وارد شوید"})}export{H as default};
