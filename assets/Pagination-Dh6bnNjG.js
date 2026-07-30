import{r as f,k as t,b as m,C as u,j as o}from"./index-La17nL3v.js";const v=o.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`,w=o.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
`,j=o.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    padding: 10px 16px;
    margin-top: 16px;
    @media (max-width : 480px) {
        padding: 6px 8px;
    }
`,c=o.button`
   width: 100px;
   padding: 16px 0;
   font-weight: 900;
   border-radius: 12px;
   font-size: var(--font-size-lg);
   cursor: pointer;
   background-color: var(--color-accent);
   color: var(--color-secondary);
   &:disabled{
    opacity: .5;
   }
   @media (max-width : 480px) {
    width: 80px;
   font-size: var(--font-size-md);
    
   }
`,P=o.div`
     color: var(--color-primary);
     font-size: var(--font-size-xl);
     font-weight: 900;
     @media (max-width : 480px) {

       font-size: var(--font-size-lg);
        
     }
`;function z({newsList:s,getNewsLoading:l,itemsPage:x=6}){const[i,p]=f.useState(1),e=x;if(l)return t.jsx(m,{});const r=(i-1)*e,g=r+e,h=s?.slice(r,g)||[],a=Math.ceil((s?.length||0)/e),d=n=>{n>=1&&n<=a&&p(n)};return t.jsxs(v,{children:[t.jsx(w,{children:h.map(n=>t.jsx(u,{news:n},n.id))}),a>1&&t.jsxs(j,{children:[t.jsx(c,{onClick:()=>d(i-1),disabled:i===1,children:"قبلی"}),t.jsxs(P,{children:["صفحه ",i," از ",a]}),t.jsx(c,{onClick:()=>d(i+1),disabled:i===a,children:"بعدی"})]})]})}export{z as P};
