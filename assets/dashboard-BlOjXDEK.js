import{e as N,k as e,r as l,q as z,f as I,j as r,v as _,t as ee,b as A,A as L,c as re,S as se,M as te,m as oe,n as ne,d as ae}from"./index-DxluskjS.js";import{D as k}from"./Delete-Dp-o1ypZ.js";const ie=N(e.jsx("path",{d:"M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4 8 7.99z"})),le=N(e.jsx("path",{d:"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"}));function ce(){const[o,c]=l.useState([]),[x,a]=l.useState(!0),[m,f]=l.useState(null);l.useEffect(()=>{g()},[]);async function g(){try{a(!0),f(null);const{data:t,getUserError:d}=await z.from("Users").select("*");if(d)throw d;c(t||[])}catch(t){f(t.message)}finally{a(!1)}}return{users:o,getUserLoading:x,getUserError:m,refetch:()=>{g()}}}const de=()=>{const[o,c]=l.useState(!1),[x,a]=l.useState(null);return{loading:o,error:x,deleteUser:async(p,t)=>{const d=String(p);c(!0),a(null);try{const{error:n}=await z.from("Users").delete().eq("id",d);if(n)throw n;return t&&await t(),{success:!0}}catch(n){return a(n.message),{success:!1,error:n.message}}finally{c(!1)}},promoteToAdmin:async(p,t)=>{const d=String(p);c(!0),a(null);try{const{error:n}=await z.from("Users").update({IsAdmin:!0,Roll:"ادمین"}).eq("id",d);if(n)throw n;return t&&await t(),{success:!0}}catch(n){return a(n.message),{success:!1,error:n.message}}finally{c(!1)}},demoteFromAdmin:async(p,t)=>{const d=String(p);c(!0),a(null);try{const{error:n}=await z.from("Users").update({IsAdmin:!1,Roll:"معمولی"}).eq("id",d);if(n)throw n;return t&&await t(),{success:!0}}catch(n){return a(n.message),{success:!1,error:n.message}}finally{c(!1)}}}},xe=()=>{const[o,c]=l.useState(!1),[x,a]=l.useState(null),[m,f]=l.useState(!1);return{deleteNews:async({newsId:p})=>{c(!0),a(null),f(!1);try{const{data:t,error:d}=await z.from("News").delete().eq("id",p);return d?(a(d.message),{success:!1,error:d}):(f(!0),{success:!0,data:t})}catch(t){return a(t.message),{success:!1,error:t}}finally{c(!1)}},error:x,loading:o,success:m}},E=N([e.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),e.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")]),pe=N(e.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),fe=N(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),he=r.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(108, 146, 160, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${I} 0.3s ease-out;
  animation-fill-mode: backwards;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,me=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`,ue=r.h3`
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
`,ve=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,we=r.img`
  width: 50%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
  flex-shrink: 0;
`,be=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  `,je=r.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
  font-weight: 500;
`,ye=r.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
`,ze=r.div`
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
`;function Ne({item:o,onEdit:c,onDelete:x,index:a}){return e.jsxs(he,{style:{animationDelay:`${a*.05}s`},children:[e.jsxs(me,{children:[e.jsx(ue,{children:o.NewsTitle}),e.jsx(ge,{children:o.NewsSubject})]}),e.jsxs(ve,{children:[o.MainImage&&e.jsx(we,{src:o.MainImage,alt:o.NewsTitle}),e.jsxs(be,{children:[e.jsx(je,{children:o.Journalist?`خبرنگار: ${o.Journalist}`:"—"}),e.jsx(ye,{children:new Date(o.NewsDate).toLocaleDateString("fa-IR")})]})]}),e.jsxs(ze,{children:[e.jsxs(B,{onClick:()=>c(o.id),children:[e.jsx(fe,{style:{fontSize:18}})," ویرایش"]}),e.jsxs(B,{onClick:()=>x(o.id),children:[e.jsx(k,{style:{fontSize:18}})," حذف"]})]})]})}const Ue=r.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
`,Se=r.div`
  width: 95%;
  max-width: 1600px;
  min-height: 85vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 420px 1fr;
  border-radius: 28px;
  overflow: hidden;
  animation: ${I} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`,Ce=r.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  border-right: 2px solid var(--color-info);
  animation: ${oe} 0.5s ease-out;

  @media (max-width: 768px) {
    order: 1;
    border-right: none;
    height: auto;
    max-height: 60vh;
  }
`,ke=r.div`
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
`,Ie=r.div`
  padding: 20px;
  background: var(--color-primary);
  display: flex;
  gap: 12px;
  border-bottom: 1px solid var(--color-info);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Ae=r.input`
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
`,Le=r.button`
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
`,Me=r.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 16px 0;
  }
`,De=r.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-info);
  animation: ${I} 0.3s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateX(8px) translateY(-2px);
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,$e=r.div`
  flex: 1;
`,Ee=r.div`
  font-weight: 800;
  color: var(--color-secondary);
  font-size: var(--font-size-lg);
  margin-bottom: 4px;
`,Be=r.div`
  font-size: var(--font-size-md);
  font-weight: 500;
  color: var(--color-accent);
`,Te=r.div`
  border-radius: 20px;
  color: white;
  display: inline-block;
  font-weight: 900;
  svg {
    font-size: var(--font-size-xxl);
  }
`,Re=r.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Fe=r.button`
  padding: 4px 12px;
  background: var(--color-accent);
  border: none;
  border-radius: 10px;
  color: var(--color-secondary);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
  font-size: var(--font-size-md);
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
`,Ve=r.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background: var(--color-secondary);
  animation: ${ne} 0.5s ease-out;

  @media (max-width: 768px) {
    height: auto;
    min-height: 70vh;
  }
`,Ye=r.div`
  padding: 24px;
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-info);
  position: relative;
`,qe=r.div`
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
`,v=r.div`
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
`,U=r.div`
  margin-bottom: 8px;
  transition: all 0.3s ease;

  ${v}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`,S=r.div`
  font-size: var(--font-size-xxl);
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  transition: all 0.3s ease;

  ${v}:hover & {
    text-shadow: 0 0 10px var(--color-accent);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`,C=r.div`
  font-size: var(--font-size-xl);
  color: var(--color-info);
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`,He=r.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,Je=r.div`
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
`,Oe=r.div`
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
`,Ge=r.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--color-neutral);
  font-size: var(--font-size-lg);
  width: 100%;
`,Pe=r(k)`
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
`,We=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${I} 0.3s ease-out;
`;function Qe(){const[o,c]=l.useState(""),[x,a]=l.useState([]),[m,f]=l.useState([]),[g,p]=l.useState(!1),{users:t,getUserLoading:d,refetch:n}=ce(),{news:u,getNewsLoading:T,Newsrefetch:R}=_(),{error:M,deleteUser:F,promoteToAdmin:V,demoteFromAdmin:Y}=de(),{deleteNews:q}=xe(),H=ee(),[D,w]=l.useState(!1),[i,b]=l.useState(null);l.useEffect(()=>{f(u)},[u]);const $=()=>{if(o.trim()==="")a([]);else{const s=t.filter(h=>h.UserName?.toLowerCase().includes(o.toLowerCase()));a(s)}},J=s=>{b({id:s,type:"news"}),w(!0)},O=s=>{b({id:s.id,type:"user",userName:s.UserName}),w(!0)},G=s=>{const h=s.IsAdmin;b({id:s.id,type:"role",userName:s.UserName,isAdmin:h,action:h?"کاهش سطح":"ارتقا به ادمین"}),w(!0)},P=async()=>{if(i){p(!0);try{switch(i.type){case"news":await q({newsId:i.id}),R();break;case"user":await F(i.id,n);break;case"role":i.isAdmin?await Y(i.id,n):await V(i.id,n);break;default:break}}catch(s){console.error("خطا در عملیات:",s)}finally{p(!1),w(!1),b(null)}}},W=()=>{w(!1),b(null)},K=s=>{if(!s?.trim()){f(u);return}const h=u.filter(y=>y.NewsTitle?.toLowerCase().includes(s.toLowerCase())||y.NewsSubject?.toLowerCase().includes(s.toLowerCase())||y.Journalist?.toLowerCase().includes(s.toLowerCase()));f(h)},X=x.length>0?x:t,Q=x.length===0&&o.trim()!=="",j=l.useMemo(()=>({totalUsers:t?.length||0,totalNews:u?.length||0,admins:t?.filter(s=>s.IsAdmin).length||0,trending:u?.filter(s=>s.IsTrend).length||0}),[t,u]),Z=()=>{if(!i)return{};switch(i.type){case"news":return{title:"حذف خبر",message:"آیا از حذف این خبر اطمینان دارید؟ این عمل غیرقابل بازگشت است.",confirmText:"حذف",icon:e.jsx(k,{})};case"user":return{title:"حذف کاربر",message:`آیا از حذف کاربر "${i.userName}" اطمینان دارید؟ این عمل غیرقابل بازگشت است.`,confirmText:"حذف",icon:e.jsx(k,{})};case"role":return{title:i.isAdmin?"کاهش سطح کاربر":"ارتقا سطح کاربر",message:i.isAdmin?`آیا از کاهش سطح کاربر "${i.userName}" از ادمین به کاربر عادی اطمینان دارید؟`:`آیا از ارتقا سطح کاربر "${i.userName}" به ادمین اطمینان دارید؟`,confirmText:i.isAdmin?"کاهش سطح":"ارتقا سطح",icon:i.isAdmin?e.jsx(le,{}):e.jsx(ie,{})};default:return{}}};return e.jsxs(Ue,{children:[g&&e.jsx(We,{children:e.jsx(A,{})}),e.jsxs(Se,{children:[e.jsxs(Ce,{children:[e.jsxs(ke,{children:[e.jsxs("h2",{children:[e.jsx(L,{})," مدیریت کاربران"]}),e.jsxs("p",{children:[j.totalUsers," کاربر فعال در سیستم"]})]}),e.jsxs(Ie,{children:[e.jsx(Ae,{onChange:s=>c(s.target.value),value:o,placeholder:"جستجوی کاربر بر اساس نام...",onKeyPress:s=>s.key==="Enter"&&$()}),e.jsx(Le,{onClick:$,children:"جستجو"})]}),e.jsxs(Me,{children:[d?e.jsx(A,{}):Q?e.jsx("div",{style:{textAlign:"center",padding:40,color:"var(--color-neutral)"},children:"کاربری با این نام یافت نشد"}):X.map((s,h)=>e.jsxs(De,{style:{animationDelay:`${h*.05}s`},children:[e.jsxs($e,{children:[e.jsx(Ee,{children:s.UserName}),e.jsxs(Be,{children:["شناسه: ",s.id]})]}),e.jsx(Te,{children:s.IsAdmin?e.jsx(E,{}):e.jsx(L,{})}),e.jsxs(Re,{children:[e.jsx(Fe,{onClick:()=>G(s),children:s.IsAdmin?"کاهش":"ارتقا"}),e.jsx(Pe,{onClick:()=>O(s)})]})]},s.id)),M&&e.jsx("div",{style:{color:"var(--color-accent)",padding:10,textAlign:"center"},children:M})]})]}),e.jsxs(Ve,{children:[e.jsx(Ye,{children:e.jsxs(qe,{children:[e.jsxs(v,{children:[e.jsx(U,{children:e.jsx(L,{})}),e.jsx(S,{children:j.totalUsers}),e.jsx(C,{children:"کل کاربران"})]}),e.jsxs(v,{children:[e.jsx(U,{children:e.jsx(re,{})}),e.jsx(S,{children:j.totalNews}),e.jsx(C,{children:"کل اخبار"})]}),e.jsxs(v,{children:[e.jsx(U,{children:e.jsx(E,{})}),e.jsx(S,{children:j.admins}),e.jsx(C,{children:"ادمین‌ها"})]}),e.jsxs(v,{children:[e.jsx(U,{children:e.jsx(pe,{})}),e.jsx(S,{children:j.trending}),e.jsx(C,{children:"خبر ترند"})]})]})}),e.jsx(He,{children:e.jsxs(Je,{children:[e.jsx(se,{filterNewsHandler:K}),e.jsx(Oe,{children:T?e.jsx(A,{}):m.length===0?e.jsx(Ge,{children:"خبری برای نمایش وجود ندارد"}):m.map((s,h)=>e.jsx(Ne,{item:s,index:h,onEdit:y=>H(`/news/${y}`),onDelete:()=>J(s.id)},s.id))})]})})]})]}),D&&i&&e.jsx(te,{isOpen:D,onClose:W,onConfirm:P,...Z()})]})}export{Qe as default};
