import{t as k,r as n,l as e,k as s,f as y,a as U,K as B,R as M,u as A,m as L}from"./index-zSa54wSk.js";import{c as D,b as j,u as P}from"./index.esm-CL5eQct7.js";import{D as Y}from"./Delete-Bt563AWN.js";async function R(o,r="News_Images"){const a=o.name.split(".").pop(),t=`${crypto.randomUUID()}.${a}`,{error:d}=await k.storage.from(r).upload(t,o,{cacheControl:"3600",upsert:!1});if(d)throw new Error(d.message);const{data:{publicUrl:u}}=k.storage.from(r).getPublicUrl(t);return u}const q=3,J=q*1024*1024;function W(o){return o?o.type.startsWith("image/")?o.size>J?"حجم فایل نباید بیشتر از 3 مگابایت باشد.":null:"فقط فایل‌های تصویری مجاز هستند.":"فایلی انتخاب نشده است."}const K=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,O=s.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,G=s.label`
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  font-family: vazir;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: var(--color-neutral);
    cursor: not-allowed;
    transform: none;
  }
`,X=s.input`
  display: none;
`,Z=s.img`
  max-width: 200px;
  max-height: 150px;
  border-radius: 8px;
  margin-top: 10px;
  border: 2px solid var(--color-info);
  object-fit: cover;
`;s.div`
  width: 100%;
  height: 5px;
  background-color: var(--color-neutral);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;const Q=s.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  font-family: vazir;
`,ee=s.span`
  color: var(--color-info);
  font-size: 12px;
  margin-top: 5px;
  font-family: vazir;
`,oe="News_Images";function F({value:o,onChange:r}){const[a,t]=n.useState(!1),[d,u]=n.useState(""),[c,g]=n.useState(""),b=async i=>{const h=i.target.files[0],m=W(h);if(m){u(m);return}u(""),g(""),t(!0);try{const f=await R(h,oe);r(f),g(" تصویر با موفقیت آپلود شد")}catch(f){console.error("خطا در آپلود:",f),f.message?.includes("Bucket not found")?u("باکت پیدا نشد. لطفا با مدیر سیستم تماس بگیرید."):u("خطا در آپلود تصویر. لطفا دوباره تلاش کنید.")}finally{t(!1)}};return e.jsxs(K,{children:[e.jsxs(O,{children:[e.jsx(X,{type:"file",id:"image-upload",accept:"image/*",onChange:b,disabled:a}),e.jsx(G,{htmlFor:"image-upload",disabled:a,children:a?" در حال آپلود...":" انتخاب تصویر"})]}),d&&e.jsx(Q,{children:d}),c&&e.jsx(ee,{children:c}),o&&e.jsx(Z,{src:o,alt:"تصویر آپلود شده",onError:i=>{console.log("خطا در لود تصویر:",o),i.target.style.display="none"}})]})}const re=y(e.jsx("path",{d:"M5 4v3h5.5v12h3V7H19V4z"})),te=y(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2z"})),ne=y(e.jsx("path",{d:"M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z"})),ae=y(e.jsx("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8zM5 19l3-4 2 3 3-4 4 5z"})),se=y(e.jsx("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"})),V=y(e.jsx("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"})),ie=s.div`
  border: 2px solid var(--color-info);
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(108, 146, 160, 0.1);
  
  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 6px 20px rgba(192, 123, 116, 0.15);
    transform: translateY(-2px);
  }
`,le=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--color-neutral);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`,ce=s.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,de=s.span`
  font-weight: bold;
  font-size: 16px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 8px;
`,pe=s.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`,$=s.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-family: vazir;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,E=s($)`
  background: var(--color-neutral);
  color: var(--color-primary);
  
  &:hover:not(:disabled) {
    background: var(--color-info);
    color: var(--color-secondary);
  }
`,xe=s($)`
  background: var(--color-accent);
  color: var(--color-secondary);
  
  &:hover {
    background: #b36962;
  }
`,H=s.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid var(--color-secondary);
  border-radius: 10px;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  background: var(--color-secondary);
  color: var(--color-primary);
  font-family: vazir;
  
  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: var(--color-neutral);
    font-family: vazir;
  }
`,S=s.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-family: vazir;
`,ue=s.div`
  margin-bottom: 15px;
`,me=n.memo(({value:o,onChange:r})=>{const a=n.useCallback(t=>{r(t)},[r]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"تصویر"}),e.jsx(F,{value:o,onChange:a,bucketName:"News_Images"})]})}),he=n.memo(({value:o,onChange:r})=>{const a=n.useCallback(t=>{r(t)},[r]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"موارد لیست (هر خط یک مورد)"}),e.jsx(H,{value:o,onChange:a,placeholder:`مورد اول
مورد دوم
مورد سوم`})]})}),ge=n.memo(({value:o,onChange:r,elementType:a})=>{const t=n.useCallback(d=>{r(d)},[r]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"محتوا"}),e.jsx(H,{value:o,onChange:t,placeholder:`متن ${a} را وارد کنید...`})]})});function fe({element:o,index:r,elementInfo:a,moveElement:t,removeElement:d,updateElementContent:u,contentLength:c}){const g=n.useCallback(()=>{t(r,"up")},[r,t]),b=n.useCallback(()=>{t(r,"down")},[r,t]),i=n.useCallback(()=>{d(r)},[r,d]),h=n.useCallback(p=>{u(r,"content",p.target.value)},[r,u]),m=n.useCallback(p=>{u(r,"content",p)},[r,u]),f=n.useMemo(()=>{const{element:p,content:x}=o;switch(p){case"img":return e.jsx(me,{value:x,onChange:m});case"list":return e.jsx(he,{value:x,onChange:h});default:return e.jsx(ge,{value:x,onChange:h,elementType:p})}},[o,h,m]),w=n.useMemo(()=>r===0,[r]),l=n.useMemo(()=>r===c-1,[r,c]);return e.jsxs(ie,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:e.jsxs(de,{children:[a?.icon,a?.label]})}),e.jsxs(pe,{children:[e.jsxs(E,{type:"button",onClick:g,disabled:w,children:[e.jsx(U,{})," بالا"]}),e.jsxs(E,{type:"button",onClick:b,disabled:l,children:[e.jsx(B,{})," پایین"]}),e.jsxs(xe,{type:"button",onClick:i,children:[e.jsx(Y,{})," حذف"]})]})]}),e.jsx(ue,{children:f})]})}const be=n.memo(fe),N=s.label`
  font-size: var(--font-size-md);
  font-weight: 700;
  display: block;
  color: var(--color-primary);
  margin-bottom: 6px;
`,ve=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 15px;
  margin: 20px 0;
  @media (max-width: 786px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`,ye=s.button`
  padding: 20px 15px;
  border: 2px solid
    ${({added:o})=>o?"var(--color-info)":"var(--color-accent)"};
  background: ${({added:o})=>o?"var(--color-info)":"var(--color-secondary)"};
  color: ${({added:o})=>o?"var(--color-secondary)":"var(--color-primary)"};
  border-radius: 12px;
  cursor: ${({added:o})=>o?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-family: vazir;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  &:hover:not(:disabled) {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--color-primary);
    background: ${({added:o})=>!o&&"var(--color-accent)"};
    color: ${({added:o})=>!o&&"var(--color-secondary)"};
  }
  
  &:disabled {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    width: 35%;
    padding: 0;
  }
`,we=[{type:"h1",label:"تیتر",icon:re},{type:"h2",label:"زیرتیتر",icon:te},{type:"p",label:"پاراگراف",icon:ne},{type:"img",label:"تصویر",icon:ae},{type:"quote",label:"نقل قول",icon:se},{type:"list",label:"لیست",icon:V}],je=()=>`${Date.now()}_${Math.random().toString(36).substr(2,9)}`,ze=M.memo(({element:o,isAdded:r,onAdd:a})=>{const t=o.icon;return e.jsxs(ye,{type:"button",added:r,disabled:r,onClick:()=>!r&&a(o.type),children:[e.jsx("span",{style:{fontSize:"24px"},children:e.jsx(t,{})}),e.jsx("span",{style:{fontWeight:"600"},children:o.label}),r&&e.jsx("small",{style:{fontSize:"11px",color:"inherit",opacity:.8},children:"✓ اضافه شده"})]})});function Ce({formik:o}){const{values:r,setFieldValue:a}=o,{content:t}=r,d=n.useMemo(()=>we,[]),u=n.useMemo(()=>new Set(t.map(l=>l.element)),[t]),c=n.useCallback(l=>u.has(l),[u]),g=n.useCallback(l=>{const p={element:l,content:"",color:"#282929",id:je()};a("content",[...t,p])},[t,a]),b=n.useCallback(l=>{a("content",t.filter((p,x)=>x!==l))},[t,a]),i=n.useCallback((l,p,x)=>{a("content",t.map((v,_)=>_===l?{...v,[p]:x}:v))},[t,a]),h=n.useCallback((l,p)=>{if(p==="up"&&l===0||p==="down"&&l===t.length-1)return;const x=[...t],v=p==="up"?l-1:l+1;[x[l],x[v]]=[x[v],x[l]],a("content",x)},[t,a]),m=n.useMemo(()=>({moveElement:h,removeElement:b,updateElementContent:i}),[h,b,i]),f=n.useMemo(()=>d.map(l=>{const p=c(l.type);return e.jsx(ze,{element:l,isAdded:p,onAdd:g},l.type)}),[d,c,g]),w=n.useMemo(()=>t.length===0?null:t.map((l,p)=>{const x=d.find(v=>v.type===l.element);return e.jsx(be,{element:l,index:p,elementInfo:{...x,icon:x?e.jsx(x.icon,{}):null},...m,contentLength:t.length},l.id)}),[t,d,m]);return e.jsxs("div",{style:{width:"100%"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx(N,{children:"انتخاب نوع محتوا"}),e.jsx(ve,{children:f})]}),t.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx(V,{})," المان‌های اضافه شده (",A(t.length),")"]}),w]})]})}const Ie=M.memo(Ce),ke=()=>D({NewsTitle:j().required("عنوان خبر الزامی است").min(5,"عنوان خبر باید حداقل ۵ کاراکتر باشد"),NewsSubject:j().required("موضوع خبر الزامی است"),NewsMainText:j().required("خلاصه خبر الزامی است").min(10,"خلاصه خبر باید حداقل ۱۰ کاراکتر باشد"),Journalist:j().required("نام خبرنگار الزامی است"),Country:j().required("کشور الزامی است")}),Me=s.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
  animation: ${L} 0.3s linear;
  @media (max-width: 400px) {
    padding: 0;
  }
`,z=s.label`
  font-size: var(--font-size-md);
  font-weight: 700;
  display: block;
  color: var(--color-primary);
  margin-bottom: 6px;
`,Se=s.form`
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 15px 0;
  background-color: var(--color-accent);
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(40, 41, 41, 0.1);
  border: 2px solid var(--color-info);
  @media (max-width: 768px) {
    width: 90%;
    gap: 10px;
    padding: 10px;
  }
`,Ee=s.textarea`
  width: 60%;
  height: 120px;
  resize: none;
  overflow-y: scroll;
  padding: 15px;
  font-family: vazir;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  &::placeholder {
    color: var(--color-neutral);
    font-family: vazir;
  }
  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`,Ne=s.select`
  width: 60%;
  padding: 15px;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-family: vazir;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`,C=s.input`
  width: 60%;
  padding: 15px;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-neutral);
  border-radius: 10px;
  font-family: vazir;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  &::placeholder {
    color: var(--color-neutral);
    font-family: vazir;
  }
  &:focus {
    border-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 123, 116, 0.1);
    transform: translateY(-2px);
  }
`,Te=s.button`
  padding: 15px 40px;
  background: var(--color-accent);
  color: var(--color-secondary);
  border: none;
  border-radius: 10px;
  font-size: var(--font-size-sm);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: vazir;
  margin-top: 20px;
  align-self: center;
  box-shadow: 0 4px 15px rgba(192, 123, 116, 0.3);
  &:hover:not(:disabled) {
    background: #b36962;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(192, 123, 116, 0.4);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,I=s.div`
  color: red;
  font-size: var(--font-size-xs);
  margin-top: 5px;
  font-weight: 600;
  font-family: vazir;
  padding: 8px 12px;
  background: rgba(192, 123, 116, 0.1);
  border-radius: 6px;
  border-right: 3px solid var(--color-accent);
`,Fe=s.div`
  color: var(--color-info);
  font-size: var(--font-size-sm);
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
  font-family: vazir;
  padding: 15px;
  background: var(--color-secondary);
  border-radius: 10px;
  border: 2px solid var(--color-info);
  box-shadow: 0 4px 15px rgba(108, 146, 160, 0.2);
`,T=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ve=["سیاست","ورزشی","اقتصاد","هنر","باستان‌شناسی-تاریخی","کشاورزی","صنعت","آموزش","انگلیسی","فرهنگی","محیط زیست","گردشگری","مذهبی","تکنولوژی"],$e={async create(o){const{data:r,error:a}=await k.from("News").insert([o]).select();if(a)throw console.error("خطای Supabase:",a),new Error(a.message);return r}};function He(){const[o,r]=n.useState(""),[a,t]=n.useState(!1),d=n.useRef(null),u=n.useMemo(()=>ke(),[]),c=P({initialValues:{NewsTitle:"",NewsSubject:"",NewsMainText:"",MainImage:"",Country:"",Journalist:"",Video:"",IsTrend:!1,content:[]},validationSchema:u,onSubmit:async(i,{resetForm:h})=>{try{t(!0),r("در حال ارسال...");const m={NewsTitle:i.NewsTitle,NewsSubject:i.NewsSubject,NewsMainText:i.NewsMainText,MainImage:i.MainImage,Country:i.Country,Journalist:i.Journalist,Video:i.Video,Content:i.content,NewsDate:new Date().toISOString()};console.log(" ارسال به دیتابیس:",m),await $e.create(m),console.log(" ذخیره شد!"),r("success"),h(),d.current=setTimeout(()=>{r(""),t(!1)},3e3)}catch(m){console.error(" خطا:",m),r("error"),t(!1)}}});n.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]);const g=(i,h,m,f={})=>{const w=c.touched[i]&&c.errors[i];return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:h}),e.jsx(m,{...c.getFieldProps(i),...f}),w&&e.jsx(I,{children:c.errors[i]})]})},b=n.useMemo(()=>o==="success"?e.jsx(Fe,{children:" خبر با موفقیت ذخیره شد!"}):o==="error"?e.jsx(I,{style:{textAlign:"center"},children:" خطا در ایجاد خبر"}):null,[o]);return e.jsx(Me,{children:e.jsxs(Se,{onSubmit:c.handleSubmit,children:[g("NewsTitle","عنوان خبر *",C,{type:"text",placeholder:"عنوان خبر را وارد کنید"}),e.jsx(z,{children:"موضوع خبر *"}),e.jsxs(Ne,{...c.getFieldProps("NewsSubject"),children:[e.jsx("option",{value:"",children:"انتخاب کنید"}),Ve.map(i=>e.jsx("option",{value:i,children:i},i))]}),c.touched.NewsSubject&&c.errors.NewsSubject&&e.jsx(I,{children:c.errors.NewsSubject}),g("NewsMainText","خلاصه خبر *",Ee,{placeholder:"خلاصه خبر را درج نمایید"}),e.jsxs(T,{children:[e.jsxs("div",{children:[e.jsx(z,{children:"تصویر اصلی"}),e.jsx(F,{value:c.values.MainImage,onChange:i=>c.setFieldValue("MainImage",i)})]}),e.jsx("div",{children:g("Country","کشور *",C,{type:"text",placeholder:"مثل ایران، آمریکا، روسیه"})})]}),e.jsxs(T,{children:[e.jsx("div",{children:g("Journalist","خبرنگار *",C,{type:"text",placeholder:"نام خبرنگار"})}),e.jsxs("div",{children:[e.jsx(z,{children:"لینک ویدیو (اختیاری)"}),e.jsx(C,{type:"text",placeholder:"آدرس ویدیو",...c.getFieldProps("Video")})]})]}),e.jsx(Ie,{formik:c}),b,e.jsx(Te,{type:"submit",disabled:a,children:a?" در حال ارسال...":" ذخیره خبر"})]})})}const Ae=M.memo(He);export{Ae as default};
