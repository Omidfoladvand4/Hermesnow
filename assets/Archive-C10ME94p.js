import{x as b,v as j,r as o,l as t,S as k,k as i}from"./index-DQF0V2hB.js";import{P as y}from"./Pagination-33kYJ9_C.js";const C=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 150px;
`,S=i.div`
  width: 100%;
  padding: 1rem 0;
`,$=i.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 10px 20px;
  background: var(--color-info);
  font-weight: 900;
  font-size: var(--font-size-xl);
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 12px;

  @media (max-width: 400px) {
    width: 100%;
    font-size: var(--font-size-md);
  }
`,D=i.span`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  @media (max-width: 768px) {
    display: none;
  }
`,d=i.div`
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  padding: 4px 10px;
  border-radius: 8px;
  background: ${e=>e.$active?"var(--color-primary)":"transparent"};
  color: ${e=>(e.$active,"var(--color-secondary)")};
  font-weight: ${e=>e.$active?"900":"700"};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`,L=i.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  gap: 1rem;
  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
    margin-bottom: 150px;
  }
`;function A(){const{news:e,getNewsLoading:x}=b(),{user:p}=j(),[u,r]=o.useState([]),[c,f]=o.useState("all"),[h,v]=o.useState(!1),[w,g]=o.useState([]),[T,m]=o.useState(!1);o.useEffect(()=>{r(e||[])},[e]);const l=(n="all")=>{if(!(!e||e.length===0))switch(f(n),v(s=>!s),n){case"all":r(e);break;case"user-fav":{const s=p?.FavoritesTopic;r(s?e.filter(a=>a.NewsSubject===s):e);break}case"old-to-new":r([...e].sort((s,a)=>new Date(s.NewsDate)-new Date(a.NewsDate)));break;case"new-to-old":r([...e].sort((s,a)=>new Date(a.NewsDate)-new Date(s.NewsDate)));break;default:r(e)}},N=o.useCallback(n=>{if(!n?.trim()){m(!0);return}const s=(e||[]).filter(a=>a.NewsTitle?.toLowerCase().includes(n.toLowerCase())||a.NewsSubject?.toLowerCase().includes(n.toLowerCase())||a.Journalist?.toLowerCase().includes(n.toLowerCase()));g(s)},[e]);return t.jsx(C,{children:t.jsxs(S,{children:[t.jsxs($,{children:[t.jsx(D,{children:"فیلتر کردن بر اساس :"}),t.jsx(d,{$active:c==="all",onClick:()=>l("all"),children:"همه"}),t.jsx(d,{$active:c==="user-fav",onClick:()=>l("user-fav"),children:"علاقه"}),t.jsx(d,{$active:c==="old-to-new",onClick:()=>l("old-to-new"),children:"قدیمی ترین"}),t.jsx(d,{$active:c==="new-to-old",onClick:()=>l("new-to-old"),children:"جدیدترین"})]}),t.jsxs(L,{children:[t.jsx(k,{filterNewsHandler:N}),t.jsx(y,{newsList:w.length>0?w:u,getNewsLoading:x,resetPage:h})]})]})})}export{A as default};
