import{e as A,k as e,r as i,q as j,v as K,t as X,b as k,A as I,c as Q,S as Z,j as o,f as S,m as _,n as ee,d as re,i as oe}from"./index-Cqs05Bxx.js";import{D}from"./Delete-BFdPpBV8.js";const se=A(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}));function te(){const[d,l]=i.useState([]),[h,n]=i.useState(!0),[p,x]=i.useState(null);i.useEffect(()=>{v()},[]);async function v(){try{n(!0),x(null);const{data:s,getUserError:c}=await j.from("Users").select("*");if(c)throw c;l(s||[])}catch(s){x(s.message)}finally{n(!1)}}return{users:d,getUserLoading:h,getUserError:p,refetch:()=>{v()}}}const ne=()=>{const[d,l]=i.useState(!1),[h,n]=i.useState(null);return{loading:d,error:h,deleteUser:async(a,s)=>{const c=String(a);l(!0),n(null);try{const{error:t}=await j.from("Users").delete().eq("id",c);if(t)throw t;return s&&await s(),{success:!0}}catch(t){return n(t.message),{success:!1,error:t.message}}finally{l(!1)}},promoteToAdmin:async(a,s)=>{const c=String(a);l(!0),n(null);try{const{error:t}=await j.from("Users").update({IsAdmin:!0,Roll:"ادمین"}).eq("id",c);if(t)throw t;return s&&await s(),{success:!0}}catch(t){return n(t.message),{success:!1,error:t.message}}finally{l(!1)}},demoteFromAdmin:async(a,s)=>{const c=String(a);l(!0),n(null);try{const{error:t}=await j.from("Users").update({IsAdmin:!1,Roll:"معمولی"}).eq("id",c);if(t)throw t;return s&&await s(),{success:!0}}catch(t){return n(t.message),{success:!1,error:t.message}}finally{l(!1)}}}},ae=()=>{const[d,l]=i.useState(!1),[h,n]=i.useState(null),[p,x]=i.useState(!1);return{deleteNews:async({newsId:a})=>{l(!0),n(null),x(!1);try{const{data:s,error:c}=await j.from("News").delete().eq("id",a);return c?(n(c.message),{success:!1,error:c}):(x(!0),{success:!0,data:s})}catch(s){return n(s.message),{success:!1,error:s}}finally{l(!1)}},error:h,loading:d,success:p}},$=A([e.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),e.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")]),ie=A(e.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),ce=o.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow-x: hidden;
`,le=o.div`
  width: 95%;
  max-width: 1600px;
  min-height: 85vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 420px 1fr;
  border-radius: 28px;
  overflow: hidden;
  animation: ${S} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  @media (max-width: 1250px) {
    display: none;
  }
`,de=o.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  border-right: 2px solid var(--color-info);
  animation: ${_} 0.5s ease-out;
`,xe=o.div`
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
`,he=o.div`
  padding: 20px;
  background: var(--color-primary);
  display: flex;
  gap: 12px;
  border-bottom: 1px solid var(--color-info);
`,fe=o.input`
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
`,pe=o.button`
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
`,ge=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,T=o.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-info);
  animation: ${S} 0.3s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateX(8px) translateY(-2px);
  }
`,ue=o.div`
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
`,ve=o.div`
  flex: 1;
`,me=o.div`
  font-weight: 800;
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: 4px;
`,be=o.div`
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-accent);
`,we=o.div`
  font-size: var(--font-size-xs);
  border-radius: 20px;
  color: white;
  display: inline-block;
  font-weight: 900;
`,je=o.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,ye=o.button`
  padding: 4px 12px;
  background: var(--color-accent);
  border: none;
  border-radius: 10px;
  color: var(--color-secondary);
  font-size: 11px;
  font-weight: 700;
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
`,ze=o.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background: var(--color-secondary);
  animation: ${ee} 0.5s ease-out;
`,Ue=o.div`
  padding: 24px;
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-info);
  position: relative;
`,Se=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`,b=o.div`
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
    animation: ${re} 1s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px);
  }
`,y=o.div`
  margin-bottom: 8px;
  transition: all 0.3s ease;

  ${b}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`,z=o.div`
  font-size: var(--font-size-xxl);
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  transition: all 0.3s ease;

  ${b}:hover & {
    text-shadow: 0 0 10px var(--color-accent);
  }
`,U=o.div`
  font-size: var(--font-size-xl);
  color: var(--color-info);
  font-weight: 600;
`,Ne=o.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;
`,ke=o.div`
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
`,Ie=o.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: rgba(108, 146, 160, 0.15);
    position: sticky;
    top: 0;
    z-index: 10;
  }
`,Ae=o.caption`
  padding: 14px;
  font-size: var(--font-size-xxl);
  font-weight: 700;
  color: var(--color-secondary);
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-info);
`,Ce=o.thead``,m=o.th`
  padding: 14px 12px;
  text-align: right;
  color: var(--color-secondary);
  font-size: var(--font-size-md);
  font-weight: 700;
  border-bottom: 1px solid var(--color-info);
`,f=o.td`
  padding: 12px 12px;
  color: white;
  font-size: var(--font-size-sm);
  border-bottom: 1px solid rgba(108, 146, 160, 0.15);
`,Le=o.tr`
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${S} 0.3s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    background: rgba(108, 146, 160, 0.12);
    transform: scale(1.01);
  }
`,$e=o.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
`,E=o.button`
  background: rgba(108, 146, 160, 0.15);
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-secondary);
  font-size: 13px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 3px;

  &:hover {
    background: var(--color-accent);
    transform: scale(1.1) translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`,Ee=o(D)`
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
`,De=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${S} 0.3s ease-out;
`,Te=o.div`
  width: 100vw;
  min-height: 100vh;
  display: none;
  background: linear-gradient(
    135deg,
    var(--color-accent),
    var(--color-primary)
  );
  color: var(--color-secondary);
  font-weight: 900;
  background-size: 200%;
  font-size: var(--font-size-xxl);
  overflow: hidden;
  animation: ${oe} 0.8s alternate infinite;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;function Re(){const[d,l]=i.useState(""),[h,n]=i.useState([]),[p,x]=i.useState([]),[v,a]=i.useState(!1),{users:s,getUserLoading:c,refetch:t}=te(),{news:g,getNewsLoading:B,Newsrefetch:M}=K(),{error:C,deleteUser:R,promoteToAdmin:F,demoteFromAdmin:W}=ne(),{deleteNews:Y}=ae(),q=X();i.useEffect(()=>{x(g)},[g]);const L=()=>{if(d.trim()==="")n([]);else{const r=s.filter(u=>u.UserName?.toLowerCase().includes(d.toLowerCase()));n(r)}},V=async r=>{a(!0),r.IsAdmin?await W(r.id,t):await F(r.id,t),a(!1)},H=async r=>{window.confirm(`⚠️ حذف "${r.UserName}"؟`)&&(a(!0),await R(r.id,t),a(!1))},G=async r=>{window.confirm("⚠️ حذف خبر؟")&&(a(!0),await Y({newsId:r}),M(),a(!1))},J=r=>{if(!r?.trim()){x(g);return}const u=g.filter(N=>N.NewsTitle?.toLowerCase().includes(r.toLowerCase())||N.NewsSubject?.toLowerCase().includes(r.toLowerCase())||N.Journalist?.toLowerCase().includes(r.toLowerCase()));x(u)},O=h.length>0?h:s,P=h.length===0&&d.trim()!=="",w=i.useMemo(()=>({totalUsers:s?.length||0,totalNews:g?.length||0,admins:s?.filter(r=>r.IsAdmin).length||0,trending:g?.filter(r=>r.IsTrend).length||0}),[s,g]);return e.jsxs(ce,{children:[v&&e.jsx(De,{children:e.jsx(k,{})}),e.jsxs(le,{children:[e.jsxs(de,{children:[e.jsxs(xe,{children:[e.jsxs("h2",{children:[e.jsx(I,{})," مدیریت کاربران"]}),e.jsxs("p",{children:[w.totalUsers," کاربر فعال در سیستم"]})]}),e.jsxs(he,{children:[e.jsx(fe,{onChange:r=>l(r.target.value),value:d,placeholder:"جستجوی کاربر بر اساس نام...",onKeyPress:r=>r.key==="Enter"&&L()}),e.jsx(pe,{onClick:L,children:"جستجو"})]}),e.jsxs(ge,{children:[c?e.jsx(k,{}):P?e.jsx("div",{style:{textAlign:"center",padding:40,color:"var(--color-neutral)"},children:"کاربری با این نام یافت نشد"}):O.map((r,u)=>e.jsxs(T,{style:{animationDelay:`${u*.05}s`},children:[e.jsx(ue,{children:r.UserName?.charAt(0).toUpperCase()}),e.jsxs(ve,{children:[e.jsx(me,{children:r.UserName}),e.jsxs(be,{children:["شناسه: ",r.id]})]}),e.jsx(we,{children:r.IsAdmin?e.jsx($,{}):e.jsx(I,{})}),e.jsxs(je,{children:[e.jsx(ye,{onClick:()=>V(r),$bg:r.IsAdmin?"rgba(192, 123, 116, 0.25)":"rgba(108, 146, 160, 0.25)",children:r.IsAdmin?"کاهش سطح":"ارتقا به ادمین"}),e.jsx(Ee,{onClick:()=>H(r)})]})]},r.id)),C&&e.jsx("div",{style:{color:"var(--color-accent)",padding:10,textAlign:"center"},children:C})]})]}),e.jsxs(ze,{children:[e.jsx(Ue,{children:e.jsxs(Se,{children:[e.jsxs(b,{children:[e.jsx(y,{children:e.jsx(I,{})}),e.jsx(z,{children:w.totalUsers}),e.jsx(U,{children:"کل کاربران"})]}),e.jsxs(b,{children:[e.jsx(y,{children:e.jsx(Q,{})}),e.jsx(z,{children:w.totalNews}),e.jsx(U,{children:"کل اخبار"})]}),e.jsxs(b,{children:[e.jsx(y,{children:e.jsx($,{})}),e.jsx(z,{children:w.admins}),e.jsx(U,{children:"ادمین‌ها"})]}),e.jsxs(b,{children:[e.jsxs(y,{children:[" ",e.jsx(ie,{})]}),e.jsx(z,{children:w.trending}),e.jsx(U,{children:"خبر ترند"})]})]})}),e.jsx(Ne,{children:e.jsxs(ke,{children:[e.jsx(Z,{filterNewsHandler:J}),e.jsx("div",{style:{overflowY:"auto",flex:1},children:e.jsxs(Ie,{children:[e.jsx(Ae,{children:"لیست آخرین اخبار سایت"}),e.jsx(Ce,{children:e.jsxs("tr",{children:[e.jsx(m,{children:"عنوان خبر"}),e.jsx(m,{children:"موضوع"}),e.jsx(m,{children:"تصویر"}),e.jsx(m,{children:"خبرنگار"}),e.jsx(m,{children:"تاریخ"}),e.jsx(m,{children:"عملیات"})]})}),e.jsx("tbody",{children:B?e.jsx("tr",{children:e.jsx(f,{colSpan:"6",style:{textAlign:"center"},children:e.jsx(k,{})})}):p.length===0?e.jsx("tr",{children:e.jsxs(f,{colSpan:"6",style:{textAlign:"center"},children:[" ","خبری برای نمایش وجود ندارد"]})}):p.map((r,u)=>e.jsxs(Le,{style:{animationDelay:`${u*.03}s`},children:[e.jsx(f,{style:{maxWidth:250,fontWeight:"900",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.NewsTitle}),e.jsx(f,{children:e.jsx("span",{style:{background:"var(--color-primary)",fontWeight:"900",padding:"4px 12px",fontSize:18,color:"var(--color-accent)"},children:r.NewsSubject})}),e.jsx(f,{children:r.MainImage?e.jsx($e,{src:r.MainImage}):"—"}),e.jsx(f,{children:r.Journalist||"—"}),e.jsx(f,{children:new Date(r.NewsDate).toLocaleDateString("fa-IR")}),e.jsxs(f,{children:[e.jsx(E,{onClick:()=>q(`/news/${r.id}`),children:e.jsx(se,{})}),e.jsx(E,{onClick:()=>G(r.id),children:e.jsx(D,{})})]})]},r.id))})]})})]})})]})]}),e.jsx(Te,{children:e.jsx("div",{children:"برای مشاهده باید با کامپیوتر وارد شوید"})})]})}export{Re as default};
