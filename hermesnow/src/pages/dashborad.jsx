import React, { useState } from 'react'
import styled from 'styled-components'
import Navigations from '../components/Navigations'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useUsers } from '../hooks/useGetUsers';
import Loader from '../components/Loader';
import { useUserManagement } from '../hooks/useUserManagement';

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
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin: 5px;
  }
   &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
  }
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
  width: 50%;
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
    background-color: yellow;
  grid-column: 2/5;
  grid-row: 1/3;
`

const NewsEditorContainer = styled.div`
  background-color: blue;
  grid-column: 2/5;
  grid-row: 2/6;
`

function Dashboard() {
  const [SearchBoxValue, setSearchBoxValue] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const { users, getUserLoading, refetch } = useUsers()
  const { error, deleteUser, promoteToAdmin, demoteFromAdmin } = useUserManagement()

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

  return (
    <DashboradContainer>
      <Navigations titleName='داشبورد' font='22px'/>
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
                    <EditIcon style={{ cursor: 'pointer' }} />
                  </UserBoxActions>
                </UserBox>
              ))
            )}
            {error && <div style={{color: 'red', padding: '10px'}}>{error}</div>}
          </UserBoxs>
        </UsersContainer>
        <CharsContainer></CharsContainer>
        <NewsEditorContainer></NewsEditorContainer>
      </DashboradWrapper>
    </DashboradContainer>
  )
}

export default Dashboard