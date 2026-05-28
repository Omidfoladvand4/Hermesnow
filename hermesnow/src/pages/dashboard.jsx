import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Navigations from '../components/Navigations'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useUsers } from '../hooks/useGetUsers';
import { useNews} from '../hooks/useGetNews'
import Loader from '../components/Loader';
import { useUserManagement } from '../hooks/useUserManagement';
import { useDeleteNews } from '../hooks/useDeleteNews'
import SearchNewsBox from '../components/SearchNewsBox';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

const slideInFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`

const slideInFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`

const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(229, 9, 20, 0); }
  100% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
`

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

const borderGlow = keyframes`
  0% { border-color: var(--color-info); box-shadow: 0 0 5px rgba(0, 229, 255, 0.3); }
  50% { border-color: var(--color-accent); box-shadow: 0 0 20px rgba(229, 9, 20, 0.5); }
  100% { border-color: var(--color-info); box-shadow: 0 0 5px rgba(0, 229, 255, 0.3); }
`

const spinGlow = keyframes`
  0% { transform: rotate(0deg); opacity: 0; }
  50% { transform: rotate(180deg); opacity: 0.5; }
  100% { transform: rotate(360deg); opacity: 0; }
`

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
    animation: ${spinGlow} 20s linear infinite;
  }
`

const DashboardWrapper = styled.div`
  width: 95%;
  max-width: 1600px;
  min-height: 85vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 420px 1fr;
  background: var(--color-secondary);
  border-radius: 28px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: ${fadeIn} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 98%;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 28px;
    padding: 2px;
    background: linear-gradient(135deg, var(--color-info), var(--color-accent));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.3;
  }
`

const UsersContainer = styled.div`
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
  height: 85vh;
  border-right: 2px solid var(--color-info);
  animation: ${slideInFromLeft} 0.5s ease-out;
  
  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 2px solid var(--color-info);
    height: auto;
    min-height: 400px;
  }
`

const UsersHeader = styled.div`
  padding: 28px 24px;
  background: var(--color-primary);
  border-bottom: 2px solid var(--color-info);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent);
    animation: ${shimmer} 3s infinite;
  }
  
  h2 {
    color: var(--color-secondary);
    font-size: 22px;
    font-weight: 800;
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    
    &::before {
      content: '⚡';
      animation: ${floatAnimation} 2s ease-in-out infinite;
      display: inline-block;
    }
  }
  
  p {
    color: var(--color-neutral);
    font-size: 13px;
    margin: 0;
  }
`

const SearchUserBox = styled.div`
  padding: 20px;
  background: var(--color-primary);
  display: flex;
  gap: 12px;
  border-bottom: 1px solid var(--color-info);
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const SearchUserInput = styled.input`
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
    box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.2);
    transform: scale(1.02);
  }
`

const SearchBoxBtn = styled.button`
  padding: 12px 28px;
  background: var(--color-accent);
  border: none;
  border-radius: 12px;
  color: var(--color-secondary);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '🔍';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    opacity: 0;
  }
  
  &:hover {
    background: #a05f58;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(192, 123, 116, 0.4);
    padding-right: 40px;
    
    &::before {
      left: 12px;
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`

const UserBoxs = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-neutral);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 10px;
  }
`

const UserBox = styled.div`
  background: var(--color-primary);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-info);
  animation: ${fadeIn} 0.3s ease-out;
  animation-fill-mode: backwards;
  
  &:hover {
    transform: translateX(8px) translateY(-2px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`

const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-accent), var(--color-info));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-secondary);
  transition: all 0.3s ease;
  
  ${UserBox}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`

const UserInfo = styled.div`
  flex: 1;
`

const UserBoxName = styled.div`
  font-weight: 700;
  color: var(--color-secondary);
  font-size: 15px;
  margin-bottom: 4px;
`

const UserBoxId = styled.div`
  font-size: 11px;
  color: var(--color-neutral);
  font-family: monospace;
`

const UserBoxRoll = styled.div`
  font-size: 11px;
  padding: 4px 12px;
  background: rgba(192, 123, 116, 0.15);
  border-radius: 20px;
  color: var(--color-accent);
  display: inline-block;
  font-weight: 600;
`

const UserBoxActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const AdminBtn = styled.button`
  padding: 6px 14px;
  background: ${({$bg}) => $bg || 'rgba(108, 146, 160, 0.2)'};
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
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background: var(--color-secondary);
  animation: ${slideInFromRight} 0.5s ease-out;
  
  @media (max-width: 1024px) {
    height: auto;
  }
`

const StatsContainer = styled.div`
  padding: 24px;
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-info);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--color-accent), 
      var(--color-info), 
      transparent
    );
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: var(--color-primary);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--color-info);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(0, 229, 255, 0.1), transparent);
    transition: all 0.5s ease;
    transform: translate(-50%, -50%);
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: var(--color-accent);
    animation: ${borderGlow} 1s ease-in-out infinite;
    
    &::before {
      width: 200px;
      height: 200px;
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`

const StatIcon = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  
  ${StatCard}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: var(--color-accent);
  margin-bottom: 6px;
  transition: all 0.3s ease;
  
  ${StatCard}:hover & {
    text-shadow: 0 0 10px var(--color-accent);
  }
`

const StatLabel = styled.div`
  font-size: 12px;
  color: var(--color-neutral);
  font-weight: 600;
`

const NewsEditorContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    overflow: visible;
  }
`

const NewsEditorWrapper = styled.div`
  background: var(--color-primary);
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
`

const NewsEditorTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    background: rgba(108, 146, 160, 0.15);
    position: sticky;
    top: 0;
    z-index: 10;
  }
`

const NewsEditorTableCaption = styled.caption`
  padding: 14px;
  font-size: 15px;
  font-weight: 700;
  color: var(--color-secondary);
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-info);
`

const TableHeader = styled.thead``

const Th = styled.th`
  padding: 14px 12px;
  text-align: right;
  color: var(--color-secondary);
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid var(--color-info);
`

const Td = styled.td`
  padding: 12px 12px;
  color: var(--color-neutral);
  font-size: 12px;
  border-bottom: 1px solid rgba(108, 146, 160, 0.15);
`

const TableRow = styled.tr`
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.3s ease-out;
  animation-fill-mode: backwards;
  
  &:hover {
    background: rgba(108, 146, 160, 0.12);
    transform: scale(1.01);
  }
`

const TableImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
`

const ActionButton = styled.button`
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
    box-shadow: 0 4px 12px rgba(229, 9, 20, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const DeleteIconStyled = styled(DeleteIcon)`
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
`

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
`

function Dashboard() {
  const [searchUserValue, setSearchUserValue] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchedNews, setSearchedNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { users, getUserLoading, refetch } = useUsers()
  const { news, getNewsLoading, Newsrefetch } = useNews()
  const { error, deleteUser, promoteToAdmin, demoteFromAdmin } = useUserManagement()
  const { deleteNews } = useDeleteNews()

  useEffect(() => {
    setSearchedNews(news)
  }, [news])

  const handleSearchUser = () => {
    if (searchUserValue.trim() === '') {
      setFilteredUsers([])
    } else {
      const filtered = users.filter(user => 
        user.UserName?.toLowerCase().includes(searchUserValue.toLowerCase())
      )
      setFilteredUsers(filtered)
    }
  }

  const handleChangeRoll = async (user) => {
    setIsLoading(true)
    if(user.IsAdmin) await demoteFromAdmin(user.id, refetch)
    else await promoteToAdmin(user.id, refetch)
    setIsLoading(false)
  }

  const handleDeleteUser = async (user) => {
    if(window.confirm(`⚠️ حذف "${user.UserName}"؟`)) {
      setIsLoading(true)
      await deleteUser(user.id, refetch)
      setIsLoading(false)
    }
  }

  const deleteNewsHandler = async (id) => {
    if(window.confirm('⚠️ حذف خبر؟')) {
      setIsLoading(true)
      await deleteNews({ newsId: id })
      Newsrefetch()
      setIsLoading(false)
    }
  }

  const filteredNews = (value) => {
    if (!value?.trim()) {
      setSearchedNews(news)
      return
    }
    const filtered = news.filter(item => 
      item.NewsTitle?.toLowerCase().includes(value.toLowerCase()) ||
      item.NewsSubject?.toLowerCase().includes(value.toLowerCase()) ||
      item.Journalist?.toLowerCase().includes(value.toLowerCase())
    )
    setSearchedNews(filtered)
  }

  const displayUsers = filteredUsers.length > 0 ? filteredUsers : users
  const noUsersFound = filteredUsers.length === 0 && searchUserValue.trim() !== ''

  const stats = {
    totalUsers: users?.length || 0,
    totalNews: news?.length || 0,
    admins: users?.filter(u => u.IsAdmin).length || 0,
    trending: news?.filter(n => n.IsTrend).length || 0
  }

  return (
    <DashboardContainer>
      {isLoading && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
            
      <DashboardWrapper>
        <UsersContainer>
          <UsersHeader>
            <h2>👥 مدیریت کاربران</h2>
            <p>{stats.totalUsers} کاربر فعال در سیستم</p>
          </UsersHeader>
          
          <SearchUserBox>
            <SearchUserInput 
              onChange={(e) => setSearchUserValue(e.target.value)} 
              value={searchUserValue} 
              placeholder='جستجوی کاربر بر اساس نام...'
              onKeyPress={(e) => e.key === 'Enter' && handleSearchUser()}
            /> 
            <SearchBoxBtn onClick={handleSearchUser}>جستجو</SearchBoxBtn>
          </SearchUserBox>
          
          <UserBoxs> 
            {getUserLoading ? (
              <Loader />
            ) : noUsersFound ? (
              <div style={{ textAlign: 'center', padding: 40, color: 'var(--color-neutral)' }}>
                🔍 کاربری با این نام یافت نشد
              </div>
            ) : (
              displayUsers.map((user, index) => (
                <UserBox key={user.id} style={{ animationDelay: `${index * 0.05}s` }}>
                  <UserAvatar>{user.UserName?.charAt(0).toUpperCase()}</UserAvatar>
                  <UserInfo>
                    <UserBoxName>{user.UserName}</UserBoxName>
                    <UserBoxId>شناسه: {user.id}</UserBoxId>
                  </UserInfo>
                  <UserBoxRoll>{user.IsAdmin ? '👑 ادمین' : '👤 کاربر عادی'}</UserBoxRoll>
                  <UserBoxActions>
                    <AdminBtn 
                      onClick={() => handleChangeRoll(user)}
                      $bg={user.IsAdmin ? 'rgba(192, 123, 116, 0.25)' : 'rgba(108, 146, 160, 0.25)'}
                    >
                      {user.IsAdmin ? 'کاهش سطح' : 'ارتقا به ادمین'}
                    </AdminBtn> 
                    <DeleteIconStyled onClick={() => handleDeleteUser(user)} /> 
                  </UserBoxActions>
                </UserBox>
              ))
            )}
            {error && <div style={{color: 'var(--color-accent)', padding: 10, textAlign: 'center'}}>{error}</div>}
          </UserBoxs>
        </UsersContainer>
        
        <RightSection>
          <StatsContainer>
            <StatsGrid>
              <StatCard>
                <StatIcon>👥</StatIcon>
                <StatValue>{stats.totalUsers}</StatValue>
                <StatLabel>کل کاربران</StatLabel>
              </StatCard>
              <StatCard>
                <StatIcon>📰</StatIcon>
                <StatValue>{stats.totalNews}</StatValue>
                <StatLabel>کل اخبار</StatLabel>
              </StatCard>
              <StatCard>
                <StatIcon>👑</StatIcon>
                <StatValue>{stats.admins}</StatValue>
                <StatLabel>ادمین‌ها</StatLabel>
              </StatCard>
              <StatCard>
                <StatIcon>🔥</StatIcon>
                <StatValue>{stats.trending}</StatValue>
                <StatLabel>خبر ترند</StatLabel>
              </StatCard>
            </StatsGrid>
          </StatsContainer>
          
          <NewsEditorContainer>
            <NewsEditorWrapper>
              <SearchNewsBox filterNewsHandler={filteredNews}/>
              <div style={{ overflowY: 'auto', flex: 1 }}>
                <NewsEditorTable>
                  <NewsEditorTableCaption>📋 لیست آخرین اخبار سایت</NewsEditorTableCaption>
                  <TableHeader>
                    <tr>
                      <Th>عنوان خبر</Th>
                      <Th>موضوع</Th>
                      <Th>تصویر</Th>
                      <Th>خبرنگار</Th>
                      <Th>تاریخ</Th>
                      <Th>عملیات</Th>
                    </tr>
                  </TableHeader>
                  <tbody>
                    {getNewsLoading ? (
                      <tr><Td colSpan="6" style={{ textAlign: 'center' }}><Loader /></Td></tr>
                    ) : searchedNews.length === 0 ? (
                      <tr><Td colSpan="6" style={{ textAlign: 'center' }}>📭 خبری برای نمایش وجود ندارد</Td></tr>
                    ) : (
                      searchedNews.map((item, index) => (
                        <TableRow key={item.id} style={{ animationDelay: `${index * 0.03}s` }}>
                          <Td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.NewsTitle}</Td>
                          <Td><span style={{ background: 'rgba(192, 123, 116, 0.15)', padding: '4px 12px', borderRadius: 20, fontSize: 11, color: 'var(--color-accent)' }}>{item.NewsSubject}</span></Td>
                          <Td>{item.MainImage ? <TableImage src={item.MainImage} /> : '—'}</Td>
                          <Td>{item.Journalist || '—'}</Td>
                          <Td>{new Date(item.NewsDate).toLocaleDateString('fa-IR')}</Td>
                          <Td>
                            <ActionButton onClick={() => window.open(`/news/${item.id}`)}>👁️</ActionButton>
                            <ActionButton onClick={() => deleteNewsHandler(item.id)}>🗑️</ActionButton>
                          </Td>
                        </TableRow>
                      ))
                    )}
                  </tbody>
                </NewsEditorTable>
              </div>
            </NewsEditorWrapper>
          </NewsEditorContainer>
        </RightSection>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default Dashboard