import{r as l,k as t,b as u,C as v,j as o}from"./index-DyO4p5ke.js";const w=o.div`
    width: 100%;
    height: max-content;
    max-height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 12px auto;
`,j=o.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
`,y=o.div`
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
`,p=o.button`
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
`,z=o.div`
     color: var(--color-primary);
     font-size: var(--font-size-xl);
     font-weight: 900;
     @media (max-width : 480px) {
       font-size: var(--font-size-lg);
     }
`;function b({newsList:s,getNewsLoading:g,itemsPage:f=6,resetPage:r=!1}){const[i,d]=l.useState(1),e=f;if(l.useEffect(()=>{r&&d(1)},[r]),g)return t.jsx(u,{});const c=(i-1)*e,h=c+e,m=s?.slice(c,h)||[],a=Math.ceil((s?.length||0)/e),x=n=>{n>=1&&n<=a&&d(n)};return t.jsxs(w,{children:[t.jsx(j,{children:m.map(n=>t.jsx(v,{news:n},n.id))}),a>1&&t.jsxs(y,{children:[t.jsx(p,{onClick:()=>x(i-1),disabled:i===1,children:"قبلی"}),t.jsxs(z,{children:["صفحه ",i," از ",a]}),t.jsx(p,{onClick:()=>x(i+1),disabled:i===a,children:"بعدی"})]})]})}export{b as P};
