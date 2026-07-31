import{r as s,q as v,e as N,k as e,u as D,T as j,L as k,P as L,j as o,t as A,w as _,b as S,p as B,C as q,o as V,z as F}from"./index-DyO4p5ke.js";import{c as H,b as G,u as J}from"./index.esm-D6qc3Tqn.js";import{S as P}from"./Sidebar-DfP3ZK2M.js";function O(t){const[n,a]=s.useState([]),[r,l]=s.useState(!0),[c,d]=s.useState(null);s.useEffect(()=>{t&&h()},[t]);async function h(){try{l(!0),d(null);const{data:m,error:f}=await v.from("News").select("*");if(f)throw f;const i=m?.filter(x=>x.NewsSubject===t)||[];a(i)}catch(m){d(m.message),console.error("خطا در دریافت اخبار:",m)}finally{l(!1)}}return{getRecomendedNews:n,Newsrefetch:()=>{h()},getRecomendedNewsLoading:r,getRecomendedNewsError:c}}const U=()=>{const[t,n]=s.useState(!1),[a,r]=s.useState(!1);return s.useEffect(()=>{navigator.share&&n(!0)},[]),{shareNews:async(d,h)=>{r(!0);const u={title:d.NewsTitle,text:d.NewsMainText,url:h};try{await navigator.share(u)}catch{console.log("خطا یا انصراف کاربر")}finally{r(!1)}},copyToClipboard:d=>{navigator.clipboard.writeText(d)},isShareble:t,shareLoading:a}},X=H({comment:G().trim().min(10,"نظر باید حداقل ۱۰ کاراکتر باشد").max(500,"نظر باید حداکثر ۵۰۰ کاراکتر باشد").required("لطفاً نظر خود را وارد کنید")}),y="News",b="comments_cache",C={get:t=>{const n=`${b}_${t}`,a=sessionStorage.getItem(n);if(a){const{data:r,timestamp:l}=JSON.parse(a);if(Date.now()-l<300*1e3)return r}return null},set:(t,n)=>{const a=`${b}_${t}`;sessionStorage.setItem(a,JSON.stringify({data:n,timestamp:Date.now()}))},clear:t=>{const n=`${b}_${t}`;sessionStorage.removeItem(n)}};async function E(t,n=!0){if(n){const c=C.get(t);if(c)return c}const{data:a,error:r}=await v.from(y).select("Comments").eq("id",t).single();if(r)throw new Error(r.message||"خطا در ارتباط با سرور");const l=a?.Comments??[];return C.set(t,l),l}async function K(t,n){const{data:a,error:r}=await v.from(y).select("Comments").eq("id",t).single();if(r)throw new Error(r.message||"خطا در ارتباط با سرور");const l=a?.Comments??[],c=[n,...l],{error:d}=await v.from(y).update({Comments:c}).eq("id",t);if(d)throw new Error(d.message||"خطا در ارتباط با سرور");return C.clear(t),c}function W({newsId:t,user:n,isAuthenticated:a,setComments:r,onCommentAdded:l,setError:c}){return J({initialValues:{comment:""},validationSchema:X,onSubmit:async(d,{resetForm:h,setSubmitting:u})=>{try{if(!a){c("برای ثبت نظر باید وارد شوید");return}if(!d.comment.trim()){c("نظر نمی‌تواند خالی باشد");return}const m={id:Date.now(),content:d.comment.trim(),user_name:n?.UserName||n?.email?.split("@")[0]||"کاربر",created_at:new Date().toISOString()};r(i=>[m,...i]),l?.(m),h();const f=await K(t,m);r(f),c(null)}catch(m){console.error("خطا در ثبت نظر:",m),c("خطا در ثبت نظر. لطفاً دوباره تلاش کنید.");const f=await E(t);r(f)}finally{u(!1)}}})}const Y=N(e.jsx("path",{d:"M1 21h4V9H1zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z"})),Q=N(e.jsx("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2m4 0v12h4V3z"})),Z=N(e.jsx("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11"})),z=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 3%;
`,ee=o.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,te=o.button`
  border: none;
  padding: 20px 35px;
  cursor: pointer;
  border-radius: 15px;
  font-weight: 900;
  transition: all 0.3s ease;
  font-size: var(--font-size-xl);
  background-color: var(--color-primary);
  color: white;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,oe=o.textarea`
  width: 50vw;
  padding: 12px 16px;
  resize: none;
  border: ${t=>t.error?"2px solid red":"1px solid #ccc"};
  border-radius: 5px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`,ne=o.div`
  color: red;
  font-size: var(--font-size-sm);
  margin-top: -15px;
  animation: shake 0.5s ease;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
`,re=o.div`
  width: 80vw;
  max-height: 800px;
  overflow-y: auto;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    width: 100vw;
  }
`,se=o.div`
  width: 45%;
  min-height: 130px;
  max-height: max-content;
  position: relative;
  margin: 0 auto;
  background-color: var(--color-accent);
  padding: 10px 5px;
  margin-bottom: 15px;
  border-right: 8px solid var(--color-primary);
  transition: transform 0.2s ease;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1px;
    border: none;
  }
`,ie=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`,ae=o.p`
  width: 90%;
  margin: 0 auto;
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-info);
  line-height: 1.6;
  word-wrap: break-word;
`,ce=o.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 0px 6px;
  color: var(--color-primary) ;
  svg{
    cursor: pointer;
  }
`,de=o.div``,le=o.div``,me=o.div``;o.div``;const xe=o.div``,pe=o.div`
  color: white;
  font-weight: bold;
  font-size: var(--font-size-sm);
`,he=o.small`
  color: white;
  font-size: var(--font-size-xs);
`,fe=o.div`
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  margin: 10px 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`,ue=o.div`
  color: var(--color-accent);
  margin-top: 20px;
  font-size: var(--font-size-md);
`,ge=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
`;function we({commentsData:t,newsId:n,onCommentAdded:a}){const{user:r,loading:l,isAuthenticated:c}=D(),[d,h]=s.useState([]),[u]=s.useState(null),[m,f]=s.useState(!0);s.useEffect(()=>{(async()=>{try{f(!0);const g=await E(n);h(g||[]),u(null)}catch(g){u("خطا در بارگذاری نظرات"),console.error(g)}finally{f(!1)}})()},[n]),s.useEffect(()=>{t&&h(t)},[t]);const i=W({newsId:n,user:r,isAuthenticated:c,setComments:h,onCommentAdded:a,setError:u});return l||m?e.jsxs(z,{children:[e.jsx(j,{titleName:"نظرات کاربران"}),e.jsx(ge,{children:e.jsx("div",{children:"در حال بارگذاری نظرات..."})})]}):e.jsxs(z,{children:[e.jsx(j,{titleName:"نظرات کاربران",font:"var(--font-size-md)"}),c?e.jsxs(ee,{onSubmit:i.handleSubmit,children:[e.jsx(oe,{name:"comment",placeholder:"نظر خود را درج نمایید...",value:i.values.comment,onChange:i.handleChange,onBlur:i.handleBlur,error:!!(i.touched.comment&&i.errors.comment),disabled:i.isSubmitting}),i.touched.comment&&i.errors.comment&&e.jsx(ne,{children:i.errors.comment}),e.jsx(te,{type:"submit",disabled:!i.isValid||i.isSubmitting,children:i.isSubmitting?"در حال ارسال...":"درج نظر"})]}):e.jsxs(fe,{children:["برای ثبت نظر لطفاً وارد حساب کاربری خود شوید"," ",e.jsx(k,{to:"/login",style:{fontWeight:"bold",color:"var(--color-primary)"},children:"وارد شدن"})]}),d?.length>0?e.jsx(re,{children:d.map((x,g)=>e.jsxs(se,{style:{animation:`fadeIn 0.3s ease ${g*.05}s`},children:[e.jsxs(ie,{children:[e.jsx(pe,{children:x.user_name||"ناشناس"}),e.jsx(he,{children:L({NewsDate:x.created_at})})]}),e.jsx(ae,{children:x.content}),e.jsxs(ce,{children:[e.jsx(xe,{children:"100"}),e.jsx(me,{children:e.jsx(Z,{})}),e.jsx(le,{children:e.jsx(Q,{})}),e.jsx(de,{children:e.jsx(Y,{})})]})]},x.id||g))}):e.jsx(ue,{children:"هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!"})]})}const ve=o.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-accent);
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    height: 70vh;
  }
`,be=o.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  overflow-wrap: break-word;
  color: var(--color-info);
  padding: 0 16px;
  font-weight: 900;
  font-size: var(--font-size-xl);
  animation: ${V} 0.5s linear;
  @media (max-width: 1024px) {
    width: 100%;
  }
`,je=o.div`
  width: 100%;
  font-size: var(--font-size-xl);
  margin-right: 3%;
`,ye=o.img`
  flex-grow: 1;
  height: 100%;
  object-fit: cover;
  animation: ${F} 0.5s linear;
  @media (max-width: 1024px) {
    width: 100%;
  }
`,Ce=o.div`
  font-size: var(--font-size-md);
  font-weight: 900;
  color: var(--color-info);
  padding: 25px;
`,Ne=o.div`
  width: 100%;
  padding: 12px 20px;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`,Se=o.div`
  width: 70%;
  padding: 12px 20px;
  background-color: var(--color-accent);
  border-bottom: 6px solid var(--color-accent);
  @media (max-width: 1024px) {
    width: 100%;
  }
`,ze=o.h1`
  margin-top: 10px;
  line-height: 1.7;
  color: white;
  font-size: var(--font-size-xxl);
`,ke=o.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: 32px;
  font-size: var(--font-size-xl);
  line-height: 2;
  font-weight: 900;
  color: var(--color-secondary);
  @media (max-width: 768px) {
    text-align: start;
  }
`,Le=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4px 12px;
  font-size: var(--font-size-md);
  @media (max-width: 768px) {
    padding: 2px;
    justify-content: center;
    margin: 15px auto;
  }
`,Ee=o.div`
  font-weight: 900;
  font-size: var(--font-size-md);
  color: var(--color-info);
`,Re=o(k)`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 900;
`,Te=o.button`
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 900;
  font-size: var(--font-size-md);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.98);
  }
`,Ie=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`,Me=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1%;
  gap: 10px;
`;function _e(){const[t,n]=s.useState(null),[a,r]=s.useState(!0),[l,c]=s.useState(null),[d,h]=s.useState([]),{shareNews:u,copyToClipboard:m,isShareble:f}=U(),i=A(),{id:x}=_(),{getRecomendedNews:g,getRecomendedNewsLoading:R}=O(t?.NewsSubject);s.useEffect(()=>{x&&T()},[x]);const T=s.useCallback(async()=>{try{r(!0);const{data:p,error:w}=await v.from("News").select("*").eq("id",x).single();if(w){if(i("/"),w.code==="PGRST116"){n(null);return}throw w}n(p)}catch(p){c(p.message)}finally{r(!1)}},[x,i]),I=s.useCallback(()=>{f||m(window.location.href),u(t,window.location.href)},[m,f,t,u]),M=s.useCallback(p=>{h(w=>[p,...w])},[]),$=s.useMemo(()=>t?g.filter(p=>p.id!==t.id).slice(0,3):[],[g,t]);return a?e.jsx(S,{}):l?e.jsxs("div",{children:["خطا: ",l]}):t?e.jsxs(e.Fragment,{children:[e.jsxs(ve,{children:[e.jsxs(be,{children:[e.jsx(j,{titleName:t.NewsTitle,font:"var(--font-size-xxl)",color:"white"}),e.jsx(je,{children:t.NewsMainText}),e.jsxs(Le,{children:[e.jsx(Re,{to:`/category/${t.NewsSubject}`,children:t.NewsSubject}),e.jsxs(Ce,{children:[" ",t.Journalist]}),e.jsx(Te,{onClick:I,children:" به اشتراک گذاشتن "}),e.jsx(Ee,{children:L(t)})]})]}),e.jsx(ye,{src:t.MainImage||B,alt:t.NewsSubject})]}),e.jsxs(Ne,{children:[e.jsx(Se,{children:t.Content&&t.Content.map((p,w)=>p.element==="h1"?e.jsx(ze,{children:p.content},w):e.jsx(ke,{children:p.content},w))}),e.jsx(P,{})]}),R?e.jsx(S,{}):e.jsx(Ie,{children:e.jsx(Me,{children:$.map(p=>e.jsx(q,{news:p},p.id))})}),e.jsx(we,{commentsData:d,newsId:x,onCommentAdded:M})]}):e.jsxs("div",{children:["خبری با شناسه ",x," یافت نشد"]})}export{_e as default};
