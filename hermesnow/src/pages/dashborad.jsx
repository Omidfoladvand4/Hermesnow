import React, { useState } from 'react'
import styled from 'styled-components'
import Navigations from '../components/Navigations'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useUsers } from '../hooks/useGetUsers';
import { useNews} from '../hooks/useGetNews'
import Loader from '../components/Loader';
import { useUserManagement } from '../hooks/useUserManagement';
import  { useDeleteNews }  from '../hooks/useDeleteNews'
import SearchNewsBox from '../components/SearchNewsBox';

const DashboradContainer = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: max-content;
  background: url('/public/images/HermesNowBannar.jpg');
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: 110;
`

const DashboradWrapper = styled.div`
  width: 95%;
  height: 500px;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  grid-template-rows: 1fr 2fr 2fr;
  background: linear-gradient( 135deg , rgba(0, 0, 0, 0.5)  , transparent , rgba(255 , 255 , 255 , 0.3));
  backdrop-filter: blur(15px);
  box-shadow: inset 1px 2px 10px 8px rgba(255 , 255 , 255 , 0.1) ,
  1px 2px 10px 2px rgba(255 , 255 , 255 , 0.4);
`

const UsersContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;
  border: 1px solid var(--color-info);
`

const SearchUserBox = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-around;
     gap: 10px;
     background: var(--color-info);
`

const SearchUserInput = styled.input`
    flex: 1;
    padding: 10px 15px;
    background: transparent;
     color :var(--color-secondary);
`

const SearchBoxBtn = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  background :var(--color-secondary);
  color: var(--color-primary);
  cursor: pointer;
  font-family: vazir;
`

const UserBoxs = styled.div`
  width: 100%;
  flex: 1;
  padding: 25px 4px;
  direction: ltr;
`

const UserBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 5px;
  margin: 12px 0;
  gap: 15px;
  background-color: var(--color-neutral);
   background: ${({$backgroundColor}) =>  $backgroundColor || 'black'};
  box-shadow: 0 2px 3px 0px rgba(255,200,100,0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover{
    transform: scale(.98);
  }
`

const UserBoxName = styled.div`
    width: 20%;
    font-size: 18px;
    font-weight: bolder;
    color: var(--color-secondary);
`

const UserBoxRoll = styled.div`
   flex: 1;
   color:var(--color-primary) ;
`

const UserBoxActions = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--color-info);
`

const AdminBtn = styled.button`
  background: ${({$backgroundColor}) =>  $backgroundColor || 'black'};
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--color-secondary);
  font-weight: 900;
`

const UserBoxId = styled.div`
width: 10%;
   font-family: cursive;
`

const CharsContainer = styled.div`
  grid-column: 2/5;
  grid-row: 1/3;
`

const NewsEditorContainer = styled.div`
  grid-column: 2/5;
  grid-row: 2/6;
`
const NewsEditorWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 2%;
  background-color: var(--color-secondary);
  overflow-y: scroll;
`
const NewsEditorTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse : collapse;
  border: 2px solid  var(--color-info);
  font-size: 0.8rem;
`
const NewsEditorTableCaption = styled.caption`
  caption-side: top;
  padding: 10px;
  font-size: 18px;
  font-weight: 900;
`
const TableHeader = styled.thead`
  background-color: var(--color-info);
`
const Th = styled.th`
  border: 1px solid rgb(160 160 160);
  background-color: var(--color-info);
  padding: 8px 10px;
`
const Td = styled.td`
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
`

const TableRow = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TableImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

function Dashboard() {
  const [SearchBoxValue, setSearchBoxValue] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const { users, getUserLoading, refetch } = useUsers()
  const { news, getNewsLoading, Newsrefetch } = useNews()
  const { error, deleteUser, promoteToAdmin, demoteFromAdmin } = useUserManagement()
  const { deleteNews  , loading , success} = useDeleteNews()
  const [searchedNews , setSearchedNews] = useState(news)


  const handleSearch = () => {
    if (SearchBoxValue.trim() === '') {
      setFilteredUsers([])
    } else {
      const filtered = users.filter(user => 
        user.UserName.toLowerCase().includes(SearchBoxValue.toLowerCase())
      )
      setFilteredUsers(filtered)
    }
  }

  const handleChangeRoll = async (user) => {
    if(user.IsAdmin) {
      await demoteFromAdmin(user.id, refetch)
    } else {
      await promoteToAdmin(user.id, refetch)
    }
  }

  const handleDeleteUser = async (user) => {
    if(window.confirm(`آیا از حذف کاربر "${user.UserName}" اطمینان دارید؟`)) {
      await deleteUser(user.id, refetch)
    }
  }

  const displayUsers = filteredUsers.length > 0 ? filteredUsers : users
  const noUsersFound = filteredUsers.length === 0 && SearchBoxValue.trim() !== ''

  const deleteNewsHandler = async (id) => {
    const confirm = window.confirm('آیا از حذف خبر مطمئنی')
    if(!confirm) return
      const result = await  deleteNews({newsId : id})
      Newsrefetch()

        
  }

  const filteredNews = (value) => {
       const currentNews =    news.filter(item => 
            item.NewsTitle?.includes(value)
           )

          setSearchedNews(currentNews)
           
  }

  return (
    <DashboradContainer>
      <Navigations titleName='داشبورد' font='var(--font-size-md)'/>
      <DashboradWrapper>
        <UsersContainer>
          <SearchUserBox>
            <SearchUserInput 
              onChange={(e) => setSearchBoxValue(e.target.value)} 
              value={SearchBoxValue} 
              placeholder='کاربر مورد نظر را جستجو کنید'
            /> 
            <SearchBoxBtn onClick={handleSearch}>جستجو</SearchBoxBtn>
          </SearchUserBox>
          <UserBoxs> 
            {getUserLoading ? (
              <Loader />
            ) : noUsersFound ? (
              <div style={{
                textAlign: 'center', 
                padding: '20px', 
                color: '#666',
                fontSize: '16px'
              }}>
                🔍 کاربری با این نام یافت نشد
              </div>
            ) : (
              displayUsers.map(user => (
                <UserBox key={user.id}>
                  <UserBoxId>{user.id}</UserBoxId>
                  <UserBoxName>{user.UserName}</UserBoxName> 
                  <UserBoxRoll>{user.IsAdmin ? 'ادمین' : user.Roll || 'معمولی'}</UserBoxRoll>
                  <UserBoxActions>
                    <AdminBtn 
                      onClick={() => handleChangeRoll(user)}
                      $backgroundColor={user.IsAdmin ? '#e74c3c' : '#2ecc71'}
                    >
                      {user.IsAdmin ? 'کاهش سطح' : 'ارتقا به ادمین'}
                    </AdminBtn> 
                    <DeleteIcon onClick={() => handleDeleteUser(user)} style={{ cursor: 'pointer' }} /> 
                  </UserBoxActions>
                </UserBox>
              ))
            )}
            {error && <div style={{color: 'red', padding: '10px'}}>{error}</div>}
          </UserBoxs>
        </UsersContainer>
        <CharsContainer></CharsContainer>
        <NewsEditorContainer>
          <NewsEditorWrapper>
              <SearchNewsBox  filterNewsHandler={filteredNews}/>
            <NewsEditorTable>
              <NewsEditorTableCaption>لیست خبر های موجود در سایت </NewsEditorTableCaption>
              <TableHeader>
                <tr>
                  <Th scope='col'>عنوان</Th>
                  <Th scope='col'>موضوع</Th>
                  <Th scope='col'>عکس</Th>
                  <Th scope='col'>خبرنگار</Th>
                  <Th scope='col'>تاریخ</Th>
                  <Th scope='col'>مشاهده</Th>
                  <Th scope='col'>اکشن ها </Th>
                </tr>
              </TableHeader>
              <tbody>
                {getNewsLoading ? (
                  <tr>
                    <Td colSpan="7" style={{ textAlign: 'center' }}>
                      <Loader />
                    </Td>
                  </tr>
                ) : searchedNews.length === 0 ? (
                  <tr>
                    <Td colSpan="7" style={{ textAlign: 'center' }}>
                      هیچ خبری یافت نشد
                    </Td>
                  </tr>
                ) : (
                  searchedNews.map((item) => (
                    <TableRow key={item.id}>
                      <Td>{item.NewsTitle}</Td>
                      <Td>
                        <span >
                          {item.NewsSubject}
                        </span>
                      </Td>
                      <Td>
                        {item.MainImage ? (
                          <TableImage src={item.MainImage} alt={item.NewsTitle} />
                        ) : '—'}
                      </Td>
                      <Td>{item.Journalist || '—'}</Td>
                      <Td>{new Date(item.NewsDate).toLocaleDateString('fa-IR')}</Td>
                      <Td>
                        <ActionButton onClick={() => window.open(`/news/${item.id}`)}>
                          👁️
                        </ActionButton>
                      </Td>
                      <Td>
                        <ActionButton  onClick={() => deleteNewsHandler(item.id)}>
                          <EditIcon fontSize="small" />
                        </ActionButton>
                      </Td>
                    </TableRow>
                  ))
                )}
              </tbody>
            </NewsEditorTable>
          </NewsEditorWrapper>
        </NewsEditorContainer>
      </DashboradWrapper>
    </DashboradContainer>
  )
}

export default Dashboard