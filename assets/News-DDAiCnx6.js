import{r as a,q as b,u as I,k as t,T as j,L as k,P as E,j as o,t as _,w as D,b as S,p as A,C as B,o as q,z as F}from"./index-Cqs05Bxx.js";import{c as G,b as J,u as P}from"./index.esm-DPEQo0gi.js";import{S as X}from"./Sidebar-DCqUb1c-.js";function H(e){const[n,i]=a.useState([]),[s,m]=a.useState(!0),[c,d]=a.useState(null);a.useEffect(()=>{e&&x()},[e]);async function x(){try{m(!0),d(null);const{data:l,error:p}=await b.from("News").select("*");if(p)throw p;const h=l?.filter(r=>r.NewsSubject===e)||[];i(h)}catch(l){d(l.message),console.error("خطا در دریافت اخبار:",l)}finally{m(!1)}}return{getRecomendedNews:n,Newsrefetch:()=>{x()},getRecomendedNewsLoading:s,getRecomendedNewsError:c}}const O=()=>{const[e,n]=a.useState(!1),[i,s]=a.useState(!1);return a.useEffect(()=>{navigator.share&&n(!0)},[]),{shareNews:async(d,x)=>{s(!0);const u={title:d.NewsTitle,text:d.NewsMainText,url:x};try{await navigator.share(u)}catch{console.log("خطا یا انصراف کاربر")}finally{s(!1)}},copyToClipboard:d=>{navigator.clipboard.writeText(d)},isShareble:e,shareLoading:i}},U=G({comment:J().trim().min(10,"نظر باید حداقل ۱۰ کاراکتر باشد").max(500,"نظر باید حداکثر ۵۰۰ کاراکتر باشد").required("لطفاً نظر خود را وارد کنید")}),N="News",y="comments_cache",C={get:e=>{const n=`${y}_${e}`,i=sessionStorage.getItem(n);if(i){const{data:s,timestamp:m}=JSON.parse(i);if(Date.now()-m<300*1e3)return s}return null},set:(e,n)=>{const i=`${y}_${e}`;sessionStorage.setItem(i,JSON.stringify({data:n,timestamp:Date.now()}))},clear:e=>{const n=`${y}_${e}`;sessionStorage.removeItem(n)}};async function L(e,n=!0){if(n){const c=C.get(e);if(c)return c}const{data:i,error:s}=await b.from(N).select("Comments").eq("id",e).single();if(s)throw new Error(s.message||"خطا در ارتباط با سرور");const m=i?.Comments??[];return C.set(e,m),m}async function V(e,n){const{data:i,error:s}=await b.from(N).select("Comments").eq("id",e).single();if(s)throw new Error(s.message||"خطا در ارتباط با سرور");const m=i?.Comments??[],c=[n,...m],{error:d}=await b.from(N).update({Comments:c}).eq("id",e);if(d)throw new Error(d.message||"خطا در ارتباط با سرور");return C.clear(e),c}function K({newsId:e,user:n,isAuthenticated:i,setComments:s,onCommentAdded:m,setError:c}){return P({initialValues:{comment:""},validationSchema:U,onSubmit:async(d,{resetForm:x,setSubmitting:u})=>{try{if(!i){c("برای ثبت نظر باید وارد شوید");return}if(!d.comment.trim()){c("نظر نمی‌تواند خالی باشد");return}const l={id:Date.now(),content:d.comment.trim(),user_name:n?.UserName||n?.email?.split("@")[0]||"کاربر",created_at:new Date().toISOString()};s(h=>[l,...h]),m?.(l),x();const p=await V(e,l);s(p),c(null)}catch(l){console.error("خطا در ثبت نظر:",l),c("خطا در ثبت نظر. لطفاً دوباره تلاش کنید.");const p=await L(e);s(p)}finally{u(!1)}}})}const z=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 3%;
`,W=o.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Y=o.button`
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
`,Q=o.textarea`
  width: 50vw;
  padding: 12px 16px;
  resize: none;
  border: ${e=>e.error?"2px solid red":"1px solid #ccc"};
  border-radius: 5px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  @media (max-width: 400px) {
    width: 100vw;
  }
`,Z=o.div`
  color: red;
  font-size: var(--font-size-sm);
  margin-top: -15px;
  animation: shake 0.5s ease;

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`,ee=o.div`
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
`,te=o.div`
  width: 45%;
  margin: 0 auto;
  background-color: var(--color-accent);
  padding: 10px 5px;
  margin-bottom: 15px;
  border-right: 8px solid var(--color-primary);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(-5px);
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1px;
  }
`,oe=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`,ne=o.p`
  width: 80%;
  margin: 0 auto;
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-info);
  line-height: 1.6;
  word-wrap: break-word;
`,re=o.div`
  color: white;
  font-weight: bold;
  font-size: var(--font-size-sm);
`,se=o.small`
  color: white;
  font-size: var(--font-size-xs);
`,ae=o.div`
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  margin: 10px 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`,ie=o.div`
  color: var(--color-accent);
  margin-top: 20px;
  font-size: var(--font-size-md);
`,ce=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
`;function de({commentsData:e,newsId:n,onCommentAdded:i}){const{user:s,loading:m,isAuthenticated:c}=I(),[d,x]=a.useState([]),[u,l]=a.useState(null),[p,h]=a.useState(!0);a.useEffect(()=>{(async()=>{try{h(!0);const w=await L(n);x(w||[]),l(null)}catch(w){l("خطا در بارگذاری نظرات"),console.error(w)}finally{h(!1)}})()},[n]),a.useEffect(()=>{e&&x(e)},[e]);const r=K({newsId:n,user:s,isAuthenticated:c,setComments:x,onCommentAdded:i,setError:l});return m||p?t.jsxs(z,{children:[t.jsx(j,{titleName:"نظرات کاربران"}),t.jsx(ce,{children:t.jsx("div",{children:"در حال بارگذاری نظرات..."})})]}):t.jsxs(z,{children:[t.jsx(j,{titleName:"نظرات کاربران",font:"var(--font-size-md)"}),c?t.jsxs(W,{onSubmit:r.handleSubmit,children:[t.jsx(Q,{name:"comment",placeholder:"نظر خود را درج نمایید...",value:r.values.comment,onChange:r.handleChange,onBlur:r.handleBlur,error:!!(r.touched.comment&&r.errors.comment),disabled:r.isSubmitting}),r.touched.comment&&r.errors.comment&&t.jsx(Z,{children:r.errors.comment}),t.jsx(Y,{type:"submit",disabled:!r.isValid||r.isSubmitting,children:r.isSubmitting?"در حال ارسال...":"درج نظر"})]}):t.jsxs(ae,{children:["برای ثبت نظر لطفاً وارد حساب کاربری خود شوید"," ",t.jsx(k,{to:"/login",style:{fontWeight:"bold",color:"var(--color-primary)"},children:"وارد شدن"})]}),d?.length>0?t.jsx(ee,{children:d.map((g,w)=>t.jsxs(te,{style:{animation:`fadeIn 0.3s ease ${w*.05}s`},children:[t.jsxs(oe,{children:[t.jsx(re,{children:g.user_name||"ناشناس"}),t.jsx(se,{children:E({NewsDate:g.created_at})})]}),t.jsx(ne,{children:g.content})]},g.id||w))}):t.jsx(ie,{children:"هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!"})]})}const le=o.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-accent);
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`,me=o.div`
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
  animation: ${q} 0.5s linear;
  @media (max-width: 1024px) {
    width: 100%;
  }
`,fe=o.div`
  width: 100%;
  font-size: var(--font-size-xl);
  margin-right: 3%;
`,xe=o.img`
  flex-grow: 1;
  height: 100%;
  object-fit: cover;
  animation: ${F} 0.5s linear;
  @media (max-width: 1024px) {
    width: 100%;
  }
`,pe=o.div`
  font-size: var(--font-size-md);
  font-weight: 900;
  color: var(--color-info);
  padding: 25px;
`,he=o.div`
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
`,ue=o.div`
  width: 70%;
  padding: 12px 20px;
  background-color: var(--color-accent);
  border-bottom: 6px solid var(--color-accent);
  @media (max-width: 1024px) {
    width: 100%;
  }
`,ge=o.h1`
  margin-top: 10px;
  line-height: 1.7;
  color: white;
  font-size: var(--font-size-xxl);
`,we=o.div`
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
`,ve=o.div`
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
`,be=o.div`
  font-weight: 900;
  font-size: var(--font-size-md);
  color: var(--color-info);
`,ye=o(k)`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 900;
`,je=o.button`
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 900;
  font-size: var(--font-size-md);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.98);
  }
`,Ne=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`,Ce=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1%;
  gap: 10px;
`;function Ee(){const[e,n]=a.useState(null),[i,s]=a.useState(!0),[m,c]=a.useState(null),[d,x]=a.useState([]),{shareNews:u,copyToClipboard:l,isShareble:p}=O(),h=_(),{id:r}=D(),{getRecomendedNews:g,getRecomendedNewsLoading:w}=H(e?.NewsSubject);a.useEffect(()=>{r&&T()},[r]);const T=a.useCallback(async()=>{try{s(!0);const{data:f,error:v}=await b.from("News").select("*").eq("id",r).single();if(v){if(h("/"),v.code==="PGRST116"){n(null);return}throw v}n(f)}catch(f){c(f.message)}finally{s(!1)}},[r,h]),R=a.useCallback(()=>{p||l(window.location.href),u(e,window.location.href)},[l,p,e,u]),$=a.useCallback(f=>{x(v=>[f,...v])},[]),M=a.useMemo(()=>e?g.filter(f=>f.id!==e.id).slice(0,3):[],[g,e]);return i?t.jsx(S,{}):m?t.jsxs("div",{children:["خطا: ",m]}):e?t.jsxs(t.Fragment,{children:[t.jsxs(le,{children:[t.jsxs(me,{children:[t.jsx(j,{titleName:e.NewsTitle,font:"var(--font-size-xxl)",color:"white"}),t.jsx(fe,{children:e.NewsMainText}),t.jsxs(ve,{children:[t.jsx(ye,{to:`/category/${e.NewsSubject}`,children:e.NewsSubject}),t.jsxs(pe,{children:[" ",e.Journalist]}),t.jsx(je,{onClick:R,children:" به اشتراک گذاشتن "}),t.jsx(be,{children:E(e)})]})]}),t.jsx(xe,{src:e.MainImage||A,alt:e.NewsSubject})]}),t.jsxs(he,{children:[t.jsx(ue,{children:e.Content&&e.Content.map((f,v)=>f.element==="h1"?t.jsx(ge,{children:f.content},v):t.jsx(we,{children:f.content},v))}),t.jsx(X,{})]}),w?t.jsx(S,{}):t.jsx(Ne,{children:t.jsx(Ce,{children:M.map(f=>t.jsx(B,{news:f},f.id))})}),t.jsx(de,{commentsData:d,newsId:r,onCommentAdded:$})]}):t.jsxs("div",{children:["خبری با شناسه ",r," یافت نشد"]})}export{Ee as default};
