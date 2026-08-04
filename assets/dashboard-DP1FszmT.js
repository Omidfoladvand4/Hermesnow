import{f as A,l as e,r as c,t as w,p as Z,d as ee,g as L,k as r,x as re,w as oe,b as D,A as E,c as se,S as te,M as ne,n as ae,o as ie,e as le}from"./index-DQF0V2hB.js";import{D as k}from"./Delete-RHOpdc8J.js";const ce=A(e.jsx("path",{d:"M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4 8 7.99z"})),de=A(e.jsx("path",{d:"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"}));function xe(){const[n,d]=c.useState([]),[x,a]=c.useState(!0),[g,f]=c.useState(null);c.useEffect(()=>{u()},[]);async function u(){try{a(!0),f(null);const{data:s,error:i}=await w.from("Users").select("*");if(i)throw i;d(s??[])}catch(s){f(s.message)}finally{a(!1)}}return{users:n,getUserLoading:x,getUserError:g,refetch:()=>u()}}const pe=()=>{const[n,d]=c.useState(!1),[x,a]=c.useState(null);return{loading:n,error:x,deleteUser:async(m,s)=>{const i=String(m);d(!0),a(null);try{const{error:t}=await w.from("Users").delete().eq("id",i);if(t)throw t;return s&&await s(),{success:!0}}catch(t){return a(t.message),{success:!1,error:t.message}}finally{d(!1)}},promoteToAdmin:async(m,s)=>{const i=String(m);d(!0),a(null);try{const{error:t}=await w.from("Users").update({IsAdmin:!0,Roll:"ادمین"}).eq("id",i);if(t)throw t;return s&&await s(),{success:!0}}catch(t){return a(t.message),{success:!1,error:t.message}}finally{d(!1)}},demoteFromAdmin:async(m,s)=>{const i=String(m);d(!0),a(null);try{const{error:t}=await w.from("Users").update({IsAdmin:!1,Roll:"معمولی"}).eq("id",i);if(t)throw t;return s&&await s(),{success:!0}}catch(t){return a(t.message),{success:!1,error:t.message}}finally{d(!1)}}}},fe=()=>{const[n,d]=c.useState(!1),[x,a]=c.useState(null),[g,f]=c.useState(!1),u=s=>s?s.includes("/storage/v1/object/public/")?s.split("/News_Images/")[1]||null:s:null;return{deleteNews:async({newsId:s})=>{d(!0),a(null),f(!1);try{const{data:i,error:t}=await w.from("News").select("MainImage").eq("id",s).single();if(t)return a(t.message),{success:!1,error:t};if(i?.MainImage){const b=u(i.MainImage);if(console.log("🖼️ مسیر استخراج شده:",b),b){const{data:M,error:j}=await w.storage.from("News_Images").remove([b]);console.log("Remove Data:",M),console.log("Remove Error:",x),j?console.error(" خطا در حذف از استوریج:",j):console.log(" عکس حذف شد")}}const{error:p}=await w.from("News").delete().eq("id",s);return p?(a(p.message),{success:!1,error:p}):(f(!0),{success:!0})}catch(i){return a(i.message),{success:!1,error:i}}finally{d(!1)}},error:x,loading:n,success:g}},R=A([e.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),e.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")]),me=A(e.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),he=r.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(108, 146, 160, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${L} 0.3s ease-out;
  animation-fill-mode: backwards;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,ge=r.div`
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
`,we=r.span`
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
`,be=r.img`
  width: 50%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
  flex-shrink: 0;
  @media (max-width : 768px) {
     display: none;
  }
`,je=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
    @media (max-width : 768px) {
     flex-direction: row;
  }
  `,ye=r.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
  font-weight: 500;
`,ze=r.div`
  font-size: var(--font-size-lg);
  color: var(--color-info);
`,Ne=r.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  justify-content: flex-end;
  border-top: 1px solid rgba(108, 146, 160, 0.15);
  padding-top: 10px;
`,T=r.button`
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
`;function Ue({item:n,onEdit:d,onDelete:x,index:a}){return e.jsxs(he,{style:{animationDelay:`${a*.05}s`},children:[e.jsxs(ge,{children:[e.jsx(ue,{children:n.NewsTitle}),e.jsx(we,{children:n.NewsSubject})]}),e.jsxs(ve,{children:[n.MainImage&&e.jsx(be,{src:n.MainImage||Z,alt:n.NewsTitle}),e.jsxs(je,{children:[e.jsx(ye,{children:n.Journalist?`خبرنگار: ${n.Journalist}`:"—"}),e.jsx(ze,{children:new Date(n.NewsDate).toLocaleDateString("fa-IR")})]})]}),e.jsxs(Ne,{children:[e.jsxs(T,{onClick:()=>d(n.id),children:[e.jsx(ee,{style:{fontSize:18}})," مشاهده"]}),e.jsxs(T,{onClick:()=>x(n.id),children:[e.jsx(k,{style:{fontSize:18}})," حذف"]})]})]})}const Se=r.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
`,Ie=r.div`
  width: 95%;
  max-width: 1600px;
  min-height: 85vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 420px 1fr;
  border-radius: 28px;
  overflow: hidden;
  animation: ${L} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
  animation: ${ae} 0.5s ease-out;

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
`,Ae=r.div`
  padding: 20px;
  background: var(--color-primary);
  display: flex;
  gap: 12px;
  border-bottom: 1px solid var(--color-info);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Le=r.input`
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
`,Me=r.button`
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
`,De=r.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 20px;

  @media (max-width: 480px) {
    padding: 8px 0;
  }
`,Ee=r.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 6px 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-info);
  animation: ${L} 0.3s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateX(8px) translateY(-2px);
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0;
  }
`,$e=r.div`
  flex: 1;
`,Be=r.div`
  font-weight: 800;
  color: var(--color-secondary);
  font-size: var(--font-size-lg);
  margin-bottom: 4px;
`,Re=r.div`
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
`,Fe=r.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Ve=r.button`
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
`,Ye=r.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background: var(--color-secondary);
  animation: ${ie} 0.5s ease-out;

  @media (max-width: 768px) {
    height: auto;
    min-height: 70vh;
  }
`,qe=r.div`
  padding: 24px;
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-info);
  position: relative;
`,Ge=r.div`
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
    animation: ${le} 1s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,S=r.div`
  margin-bottom: 8px;
  transition: all 0.3s ease;

  ${v}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`,I=r.div`
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
`,Pe=r.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,He=r.div`
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
  grid-column: 1 /-1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: var(--color-primary);
  font-size: var(--font-size-xxl);
  width: 100%;
`,We=r(k)`
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
`,_e=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${L} 0.3s ease-out;
`;function Qe(){const[n,d]=c.useState(""),[x,a]=c.useState([]),[g,f]=c.useState([]),[u,m]=c.useState(!1),{users:s,getUserLoading:i,refetch:t}=xe(),{news:p,getNewsLoading:b,Newsrefetch:M}=re(),{error:j,deleteUser:F,promoteToAdmin:V,demoteFromAdmin:Y}=pe(),{deleteNews:q}=fe(),G=oe(),[$,y]=c.useState(!1),[l,z]=c.useState(null);c.useEffect(()=>{f(p)},[p]);const B=()=>{if(n.trim()==="")a([]);else{const o=s.filter(h=>h.UserName?.toLowerCase().includes(n.toLowerCase()));a(o)}},P=o=>{z({id:o,type:"news"}),y(!0)},H=o=>{z({id:o.id,type:"user",userName:o.UserName}),y(!0)},J=o=>{const h=o.IsAdmin;z({id:o.id,type:"role",userName:o.UserName,isAdmin:h,action:h?"کاهش سطح":"ارتقا به ادمین"}),y(!0)},O=async()=>{if(l){m(!0);try{switch(l.type){case"news":await q({newsId:l.id}),M();break;case"user":await F(l.id,t);break;case"role":l.isAdmin?await Y(l.id,t):await V(l.id,t);break;default:break}}catch(o){console.error("خطا در عملیات:",o)}finally{m(!1),y(!1),z(null)}}},W=()=>{y(!1),z(null)},_=o=>{if(!o?.trim()){f(p);return}const h=p.filter(U=>U.NewsTitle?.toLowerCase().includes(o.toLowerCase())||U.NewsSubject?.toLowerCase().includes(o.toLowerCase())||U.Journalist?.toLowerCase().includes(o.toLowerCase()));f(h)},K=x.length>0?x:s,X=x.length===0&&n.trim()!=="",N=c.useMemo(()=>({totalUsers:s?.length||0,totalNews:p?.length||0,admins:s?.filter(o=>o.IsAdmin).length||0,trending:p?.filter(o=>o.IsTrend).length||0}),[s,p]),Q=()=>{if(!l)return{};switch(l.type){case"news":return{title:"حذف خبر",message:"آیا از حذف این خبر اطمینان دارید؟ این عمل غیرقابل بازگشت است.",confirmText:"حذف",icon:e.jsx(k,{})};case"user":return{title:"حذف کاربر",message:`آیا از حذف کاربر "${l.userName}" اطمینان دارید؟ این عمل غیرقابل بازگشت است.`,confirmText:"حذف",icon:e.jsx(k,{})};case"role":return{title:l.isAdmin?"کاهش سطح کاربر":"ارتقا سطح کاربر",message:l.isAdmin?`آیا از کاهش سطح کاربر "${l.userName}" از ادمین به کاربر عادی اطمینان دارید؟`:`آیا از ارتقا سطح کاربر "${l.userName}" به ادمین اطمینان دارید؟`,confirmText:l.isAdmin?"کاهش سطح":"ارتقا سطح",icon:l.isAdmin?e.jsx(de,{}):e.jsx(ce,{})};default:return{}}};return e.jsxs(Se,{children:[u&&e.jsx(_e,{children:e.jsx(D,{})}),e.jsxs(Ie,{children:[e.jsxs(Ce,{children:[e.jsxs(ke,{children:[e.jsxs("h2",{children:[e.jsx(E,{})," مدیریت کاربران"]}),e.jsxs("p",{children:[N.totalUsers," کاربر فعال در سیستم"]})]}),e.jsxs(Ae,{children:[e.jsx(Le,{onChange:o=>d(o.target.value),value:n,placeholder:"جستجوی کاربر بر اساس نام...",onKeyPress:o=>o.key==="Enter"&&B()}),e.jsx(Me,{onClick:B,children:"جستجو"})]}),e.jsxs(De,{children:[i?e.jsx(D,{}):X?e.jsx("div",{style:{textAlign:"center",padding:40,color:"var(--color-neutral)"},children:"کاربری با این نام یافت نشد"}):K.map((o,h)=>e.jsxs(Ee,{style:{animationDelay:`${h*.05}s`},children:[e.jsxs($e,{children:[e.jsx(Be,{children:o.UserName}),e.jsxs(Re,{children:["شناسه: ",o.id]})]}),e.jsx(Te,{children:o.IsAdmin?e.jsx(R,{}):e.jsx(E,{})}),e.jsxs(Fe,{children:[e.jsx(Ve,{onClick:()=>J(o),children:o.IsAdmin?"کاهش":"ارتقا"}),e.jsx(We,{onClick:()=>H(o)})]})]},o.id)),j&&e.jsx("div",{style:{color:"var(--color-accent)",padding:10,textAlign:"center"},children:j})]})]}),e.jsxs(Ye,{children:[e.jsx(qe,{children:e.jsxs(Ge,{children:[e.jsxs(v,{children:[e.jsx(S,{children:e.jsx(E,{})}),e.jsx(I,{children:N.totalUsers}),e.jsx(C,{children:"کل کاربران"})]}),e.jsxs(v,{children:[e.jsx(S,{children:e.jsx(se,{})}),e.jsx(I,{children:N.totalNews}),e.jsx(C,{children:"کل اخبار"})]}),e.jsxs(v,{children:[e.jsx(S,{children:e.jsx(R,{})}),e.jsx(I,{children:N.admins}),e.jsx(C,{children:"ادمین‌ها"})]}),e.jsxs(v,{children:[e.jsx(S,{children:e.jsx(me,{})}),e.jsx(I,{children:N.trending}),e.jsx(C,{children:"خبر ترند"})]})]})}),e.jsx(Pe,{children:e.jsxs(He,{children:[e.jsx(te,{filterNewsHandler:_}),e.jsx(Je,{children:b?e.jsx(D,{}):g.length===0?e.jsx(Oe,{children:"خبری برای نمایش وجود ندارد"}):g.map((o,h)=>e.jsx(Ue,{item:o,index:h,onEdit:U=>G(`/news/${U}`),onDelete:()=>P(o.id)},o.id))})]})})]})]}),$&&l&&e.jsx(ne,{isOpen:$,onClose:W,onConfirm:O,...Q()})]})}export{Qe as default};
