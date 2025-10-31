import React from 'react'
import styled from 'styled-components'
const NewEditorContainer = styled.main `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
const NewsEditorForm = styled.form`
width: 90%;
display: flex;
align-items: start;
justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  padding: 10px 30px;
  margin: 15px 0;
  background-color: var(--color-primary);
`
const Label = styled.label`
  font-size: 18px;
  font-weight: 900;
  display: block;
  color: var(--color-secondary);
`
const MainTextInput = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  overflow-y : scroll;
  padding: 10px 15px;
  font-family: vazir;
`

function NewsEditor() {
  return (
    <NewEditorContainer>
       <NewsEditorForm >
          <Label>عنوان خبر</Label>
          <input type="text"  placeholder='مثل دیدار ترامپ با رِئیس جمهور روسیه'/>
          <Label>موضوع خبر</Label>
          <select>
    <option value="سیاسی">سیاسی</option>
    <option value="ورزشی">ورزشی</option>
    <option value="اقتصاد">اقتصاد</option>
    <option value="هنر">هنر</option>
    <option value="باستان‌شناسی">باستان‌شناسی</option>
    <option value="کشاورزی">کشاورزی</option>
    <option value="صنعت">صنعت</option>
    <option value="آموزش">آموزش</option>
    <option value="انگلیسی">انگلیسی</option>
    <option value="فرهنگی">فرهنگی</option>
    <option value="محیط زیست">محیط زیست</option>
    <option value="گردشگری">گردشگری</option>
    <option value="مذهبی">مذهبی</option>
    <option value="تکنولوژی">تکنولوژی</option>
</select>

<Label>متن اصلی خبر</Label>
<MainTextInput  placeholder='متن اصلی خود را درج نمایید' />
<button>افزودن محتوا</button>
   
       </NewsEditorForm>
    </NewEditorContainer>
  )
}

export default NewsEditor