import{r as i,q as b,e as k,k as e,f as U,j as r,v as _,t as ee,b as C,A as I,c as re,S as te,M as oe,m as se,n as ne,d as ae}from"./index-La17nL3v.js";import{D as A}from"./Delete-BXcWfi4T.js";function ie(){const[s,l]=i.useState([]),[x,a]=i.useState(!0),[f,p]=i.useState(null);i.useEffect(()=>{m()},[]);async function m(){try{a(!0),p(null);const{data:o,getUserError:d}=await b.from("Users").select("*");if(d)throw d;l(o||[])}catch(o){p(o.message)}finally{a(!1)}}return{users:s,getUserLoading:x,getUserError:f,refetch:()=>{m()}}}const le=()=>{const[s,l]=i.useState(!1),[x,a]=i.useState(null);return{loading:s,error:x,deleteUser:async(c,o)=>{const d=String(c);l(!0),a(null);try{const{error:n}=await b.from("Users").delete().eq("id",d);if(n)throw n;return o&&await o(),{success:!0}}catch(n){return a(n.message),{success:!1,error:n.message}}finally{l(!1)}},promoteToAdmin:async(c,o)=>{const d=String(c);l(!0),a(null);try{const{error:n}=await b.from("Users").update({IsAdmin:!0,Roll:"ادمین"}).eq("id",d);if(n)throw n;return o&&await o(),{success:!0}}catch(n){return a(n.message),{success:!1,error:n.message}}finally{l(!1)}},demoteFromAdmin:async(c,o)=>{const d=String(c);l(!0),a(null);try{const{error:n}=await b.from("Users").update({IsAdmin:!1,Roll:"معمولی"}).eq("id",d);if(n)throw n;return o&&await o(),{success:!0}}catch(n){return a(n.message),{success:!1,error:n.message}}finally{l(!1)}}}},ce=()=>{const[s,l]=i.useState(!1),[x,a]=i.useState(null),[f,p]=i.useState(!1);return{deleteNews:async({newsId:c})=>{l(!0),a(null),p(!1);try{const{data:o,error:d}=await b.from("News").delete().eq("id",c);return d?(a(d.message),{success:!1,error:d}):(p(!0),{success:!0,data:o})}catch(o){return a(o.message),{success:!1,error:o}}finally{l(!1)}},error:x,loading:s,success:f}},E=k([e.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),e.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")]),de=k(e.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),xe=k(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),pe=r.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(108, 146, 160, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${U} 0.3s ease-out;
  animation-fill-mode: backwards;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,fe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`,he=r.h3`
  font-size: var(--font-size-lg);
  font-weight: 900;
  color: var(--color-secondary);
  margin: 0;
  flex: 1;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,ge=r.span`
  background: var(--color-primary);
  font-weight: 900;
  padding: 4px 12px;
  font-size: 14px;
  color: var(--color-accent);
  border-radius: 20px;
  border: 1px solid var(--color-accent);
  white-space: nowrap;
  flex-shrink: 0;
`,me=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ue=r.img`
  width: 50%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
  flex-shrink: 0;
`,ve=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  `,we=r.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
  font-weight: 500;
`,be=r.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
`,je=r.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  justify-content: flex-end;
  border-top: 1px solid rgba(108, 146, 160, 0.15);
  padding-top: 10px;
`,B=r.button`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 4px;

    background: var(--color-accent);
    color: white;

  &:active {
    transform: scale(0.95);
  }
`;function ye({item:s,onEdit:l,onDelete:x,index:a}){return e.jsxs(pe,{style:{animationDelay:`${a*.05}s`},children:[e.jsxs(fe,{children:[e.jsx(he,{children:s.NewsTitle}),e.jsx(ge,{children:s.NewsSubject})]}),e.jsxs(me,{children:[s.MainImage&&e.jsx(ue,{src:s.MainImage,alt:s.NewsTitle}),e.jsxs(ve,{children:[e.jsx(we,{children:s.Journalist?`خبرنگار: ${s.Journalist}`:"—"}),e.jsx(be,{children:new Date(s.NewsDate).toLocaleDateString("fa-IR")})]})]}),e.jsxs(je,{children:[e.jsxs(B,{onClick:()=>l(s.id),children:[e.jsx(xe,{style:{fontSize:18}})," ویرایش"]}),e.jsxs(B,{onClick:()=>x(s.id),children:[e.jsx(A,{style:{fontSize:18}})," حذف"]})]})]})}const ze=r.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
`,Ue=r.div`
  width: 95%;
  max-width: 1600px;
  min-height: 85vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 420px 1fr;
  border-radius: 28px;
  overflow: hidden;
  animation: ${U} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`,Se=r.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  border-right: 2px solid var(--color-info);
  animation: ${se} 0.5s ease-out;

  @media (max-width: 768px) {
    order: 1;
    border-right: none;
    height: auto;
    max-height: 60vh;
  }
`,Ne=r.div`
  padding: 28px 24px;
  background: var(--color-accent);
  color: var(--color-info);
  font-weight: 600;
  border-bottom: 2px solid var(--color-info);
  position: relative;
  overflow: hidden;

  h2 {
    color: white;
    font-size: var(--font-size-xl);
    font-weight: 900;
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 12px;
  }

  p {
    font-size: var(--font-size-base);
  }
`,Ce=r.div`
  padding: 20px;
  background: var(--color-primary);
  display: flex;
  gap: 12px;
  border-bottom: 1px solid var(--color-info);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Ie=r.input`
  flex: 1;
  padding: 12px 16px;
  background: var(--color-secondary);
  border: 1px solid var(--color-neutral);
  border-radius: 12px;
  color: var(--color-primary);
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: var(--color-neutral);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    transform: scale(1.02);
  }
`,ke=r.button`
  padding: 12px 28px;
  background: var(--color-accent);
  border: none;
  border-radius: 12px;
  color: var(--color-secondary);
  font-weight: 700;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: white;
    text-align: center;
    transform: translateY(-2px);
    color: var(--color-accent);
  }

  &:active {
    transform: translateY(0);
  }
`,Ae=r.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 16px 0;
  }
`,T=r.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-info);
  animation: ${U} 0.3s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateX(8px) translateY(-2px);
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,Le=r.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(
    135deg,
    var(--color-accent),
    var(--color-primary)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;

  ${T}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`,De=r.div`
  flex: 1;
`,Me=r.div`
  font-weight: 800;
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: 4px;
`,$e=r.div`
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-accent);
`,Ee=r.div`
  font-size: var(--font-size-xs);
  border-radius: 20px;
  color: white;
  display: inline-block;
  font-weight: 900;
`,Be=r.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Te=r.button`
  padding: 4px 12px;
  background: var(--color-accent);
  border: none;
  border-radius: 10px;
  color: var(--color-secondary);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.92);
  }
`,Re=r.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background: var(--color-secondary);
  animation: ${ne} 0.5s ease-out;

  @media (max-width: 768px) {
    height: auto;
    min-height: 70vh;
  }
`,Fe=r.div`
  padding: 24px;
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-info);
  position: relative;
`,Ye=r.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`,u=r.div`
  background: var(--color-accent);
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--color-info);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: var(--color-accent);
    animation: ${ae} 1s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,j=r.div`
  margin-bottom: 8px;
  transition: all 0.3s ease;

  ${u}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`,y=r.div`
  font-size: var(--font-size-xxl);
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  transition: all 0.3s ease;

  ${u}:hover & {
    text-shadow: 0 0 10px var(--color-accent);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`,z=r.div`
  font-size: var(--font-size-xl);
  color: var(--color-info);
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`,qe=r.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,Ve=r.div`
  background: var(--color-accent);
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-info);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
  }
`,Je=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 10px;
    gap: 12px;
  }
`,Oe=r.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--color-neutral);
  font-size: var(--font-size-lg);
  width: 100%;
`,Ge=r(A)`
  cursor: pointer;
  color: var(--color-accent);
  font-size: 20px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.2) rotate(5deg);
    filter: drop-shadow(0 0 5px var(--color-accent));
  }

  &:active {
    transform: scale(0.9);
  }
`,He=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${U} 0.3s ease-out;
`;function Ke(){const[s,l]=i.useState(""),[x,a]=i.useState([]),[f,p]=i.useState([]),[m,c]=i.useState(!1),{users:o,getUserLoading:d,refetch:n}=ie(),{news:h,getNewsLoading:R,Newsrefetch:F}=_(),{error:L,deleteUser:Y,promoteToAdmin:q,demoteFromAdmin:V}=le(),{deleteNews:J}=ce(),O=ee(),[D,S]=i.useState(!1),[M,N]=i.useState(null);i.useEffect(()=>{p(h)},[h]);const $=()=>{if(s.trim()==="")a([]);else{const t=o.filter(g=>g.UserName?.toLowerCase().includes(s.toLowerCase()));a(t)}},G=async t=>{c(!0),t.IsAdmin?await V(t.id,n):await q(t.id,n),c(!1)},H=async t=>{window.confirm(`⚠️ حذف "${t.UserName}"؟`)&&(c(!0),await Y(t.id,n),c(!1))},W=t=>{N({id:t,type:"news"}),S(!0)},P=async()=>{M&&(c(!0),await J({newsId:M.id}),F(),c(!1),S(!1),N(null))},K=()=>{S(!1),N(null)},X=t=>{if(!t?.trim()){p(h);return}const g=h.filter(w=>w.NewsTitle?.toLowerCase().includes(t.toLowerCase())||w.NewsSubject?.toLowerCase().includes(t.toLowerCase())||w.Journalist?.toLowerCase().includes(t.toLowerCase()));p(g)},Q=x.length>0?x:o,Z=x.length===0&&s.trim()!=="",v=i.useMemo(()=>({totalUsers:o?.length||0,totalNews:h?.length||0,admins:o?.filter(t=>t.IsAdmin).length||0,trending:h?.filter(t=>t.IsTrend).length||0}),[o,h]);return e.jsxs(ze,{children:[m&&e.jsx(He,{children:e.jsx(C,{})}),e.jsxs(Ue,{children:[e.jsxs(Se,{children:[e.jsxs(Ne,{children:[e.jsxs("h2",{children:[e.jsx(I,{})," مدیریت کاربران"]}),e.jsxs("p",{children:[v.totalUsers," کاربر فعال در سیستم"]})]}),e.jsxs(Ce,{children:[e.jsx(Ie,{onChange:t=>l(t.target.value),value:s,placeholder:"جستجوی کاربر بر اساس نام...",onKeyPress:t=>t.key==="Enter"&&$()}),e.jsx(ke,{onClick:$,children:"جستجو"})]}),e.jsxs(Ae,{children:[d?e.jsx(C,{}):Z?e.jsx("div",{style:{textAlign:"center",padding:40,color:"var(--color-neutral)"},children:"کاربری با این نام یافت نشد"}):Q.map((t,g)=>e.jsxs(T,{style:{animationDelay:`${g*.05}s`},children:[e.jsx(Le,{children:t.UserName?.charAt(0).toUpperCase()}),e.jsxs(De,{children:[e.jsx(Me,{children:t.UserName}),e.jsxs($e,{children:["شناسه: ",t.id]})]}),e.jsx(Ee,{children:t.IsAdmin?e.jsx(E,{}):e.jsx(I,{})}),e.jsxs(Be,{children:[e.jsx(Te,{onClick:()=>G(t),$bg:t.IsAdmin?"rgba(192, 123, 116, 0.25)":"rgba(108, 146, 160, 0.25)",children:t.IsAdmin?"کاهش ":"ارتقا  "}),e.jsx(Ge,{onClick:()=>H(t)})]})]},t.id)),L&&e.jsx("div",{style:{color:"var(--color-accent)",padding:10,textAlign:"center"},children:L})]})]}),e.jsxs(Re,{children:[e.jsx(Fe,{children:e.jsxs(Ye,{children:[e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(I,{})}),e.jsx(y,{children:v.totalUsers}),e.jsx(z,{children:"کل کاربران"})]}),e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(re,{})}),e.jsx(y,{children:v.totalNews}),e.jsx(z,{children:"کل اخبار"})]}),e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(E,{})}),e.jsx(y,{children:v.admins}),e.jsx(z,{children:"ادمین‌ها"})]}),e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(de,{})}),e.jsx(y,{children:v.trending}),e.jsx(z,{children:"خبر ترند"})]})]})}),e.jsx(qe,{children:e.jsxs(Ve,{children:[e.jsx(te,{filterNewsHandler:X}),e.jsx(Je,{children:R?e.jsx(C,{}):f.length===0?e.jsx(Oe,{children:"خبری برای نمایش وجود ندارد"}):f.map((t,g)=>e.jsx(ye,{item:t,index:g,onEdit:w=>O(`/news/${w}`),onDelete:()=>W(t.id)},t.id))})]})})]})]}),D&&e.jsx(oe,{isOpen:D,onClose:K,onConfirm:P,title:"حذف خبر",message:"آیا از حذف این خبر اطمینان دارید؟ این عمل غیرقابل بازگشت است.",confirmText:"حذف",cancelText:"انصراف",icon:e.jsx(A,{})})]})}export{Ke as default};
