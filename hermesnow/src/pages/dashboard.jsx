import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useUsers } from "../hooks/useGetUsers";
import { useNews } from "../hooks/useGetNews";
import Loader from "../components/Loader";
import { useUserManagement } from "../hooks/useUserManagement";
import { useDeleteNews } from "../hooks/useDeleteNews";
import SearchNewsBox from "../components/SearchNewsBox";
import { useNavigate } from "react-router-dom";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  borderGlow,
  gradientMove,
} from "../styles/animations";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItemIcon from "@mui/material/ListItemIcon";

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow-x: hidden;
`;

const DashboardWrapper = styled.div`
  width: 95%;
  max-width: 1600px;
  min-height: 85vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 420px 1fr;
  border-radius: 28px;
  overflow: hidden;
  animation: ${fadeIn} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  @media (max-width: 1250px) {
    display: none;
  }
`;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  border-right: 2px solid var(--color-info);
  animation: ${slideInFromLeft} 0.5s ease-out;
`;

const UsersHeader = styled.div`
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
`;

const SearchUserBox = styled.div`
  padding: 20px;
  background: var(--color-primary);
  display: flex;
  gap: 12px;
  border-bottom: 1px solid var(--color-info);
`;

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
    transform: scale(1.02);
  }
`;

const SearchBoxBtn = styled.button`
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
`;

const UserBoxs = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

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
  }
`;

const UserAvatar = styled.div`
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

  ${UserBox}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserBoxName = styled.div`
  font-weight: 800;
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: 4px;
`;

const UserBoxId = styled.div`
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-accent);
`;

const UserBoxRoll = styled.div`
  font-size: var(--font-size-xs);
  border-radius: 20px;
  color: white;
  display: inline-block;
  font-weight: 900;
`;

const UserBoxActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AdminBtn = styled.button`
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
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  background: var(--color-secondary);
  animation: ${slideInFromRight} 0.5s ease-out;
`;

const StatsContainer = styled.div`
  padding: 24px;
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-info);
  position: relative;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const StatCard = styled.div`
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
    animation: ${borderGlow} 1s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const StatIcon = styled.div`
  margin-bottom: 8px;
  transition: all 0.3s ease;

  ${StatCard}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`;

const StatValue = styled.div`
  font-size: var(--font-size-xxl);
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  transition: all 0.3s ease;

  ${StatCard}:hover & {
    text-shadow: 0 0 10px var(--color-accent);
  }
`;

const StatLabel = styled.div`
  font-size: var(--font-size-xl);
  color: var(--color-info);
  font-weight: 600;
`;

const NewsEditorContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;
`;

const NewsEditorWrapper = styled.div`
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
`;

const NewsEditorTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: rgba(108, 146, 160, 0.15);
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

const NewsEditorTableCaption = styled.caption`
  padding: 14px;
  font-size: var(--font-size-xxl);
  font-weight: 700;
  color: var(--color-secondary);
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-info);
`;

const TableHeader = styled.thead``;

const Th = styled.th`
  padding: 14px 12px;
  text-align: right;
  color: var(--color-secondary);
  font-size: var(--font-size-md);
  font-weight: 700;
  border-bottom: 1px solid var(--color-info);
`;

const Td = styled.td`
  padding: 12px 12px;
  color: white;
  font-size: var(--font-size-sm);
  border-bottom: 1px solid rgba(108, 146, 160, 0.15);
`;

const TableRow = styled.tr`
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.3s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    background: rgba(108, 146, 160, 0.12);
    transform: scale(1.01);
  }
`;

const TableImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-info);
`;

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
  }

  &:active {
    transform: scale(0.95);
  }
`;

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
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
`;
const DashboardWarning = styled.div`
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
  animation: ${gradientMove} 0.8s alternate infinite;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Dashboard() {
  const [searchUserValue, setSearchUserValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { users, getUserLoading, refetch } = useUsers();
  const { news, getNewsLoading, Newsrefetch } = useNews();
  const { error, deleteUser, promoteToAdmin, demoteFromAdmin } =
    useUserManagement();
  const { deleteNews } = useDeleteNews();
  const navigage = useNavigate();
  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  const handleSearchUser = () => {
    if (searchUserValue.trim() === "") {
      setFilteredUsers([]);
    } else {
      const filtered = users.filter((user) =>
        user.UserName?.toLowerCase().includes(searchUserValue.toLowerCase()),
      );
      setFilteredUsers(filtered);
    }
  };

  const handleChangeRoll = async (user) => {
    setIsLoading(true);
    if (user.IsAdmin) await demoteFromAdmin(user.id, refetch);
    else await promoteToAdmin(user.id, refetch);
    setIsLoading(false);
  };

  const handleDeleteUser = async (user) => {
    if (window.confirm(`⚠️ حذف "${user.UserName}"؟`)) {
      setIsLoading(true);
      await deleteUser(user.id, refetch);
      setIsLoading(false);
    }
  };

  const deleteNewsHandler = async (id) => {
    if (window.confirm("⚠️ حذف خبر؟")) {
      setIsLoading(true);
      await deleteNews({ newsId: id });
      Newsrefetch();
      setIsLoading(false);
    }
  };

  const filteredNews = (value) => {
    if (!value?.trim()) {
      setSearchedNews(news);
      return;
    }
    const filtered = news.filter(
      (item) =>
        item.NewsTitle?.toLowerCase().includes(value.toLowerCase()) ||
        item.NewsSubject?.toLowerCase().includes(value.toLowerCase()) ||
        item.Journalist?.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchedNews(filtered);
  };

  const displayUsers = filteredUsers.length > 0 ? filteredUsers : users;
  const noUsersFound =
    filteredUsers.length === 0 && searchUserValue.trim() !== "";


  const stats = useMemo(() => ({
  totalUsers: users?.length || 0,
  totalNews: news?.length || 0,
  admins: users?.filter(u => u.IsAdmin).length || 0,
  trending: news?.filter(n => n.IsTrend).length || 0,
}), [users, news]);
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
            <h2>
              <AccountCircleIcon /> مدیریت کاربران
            </h2>
            <p>{stats.totalUsers} کاربر فعال در سیستم</p>
          </UsersHeader>

          <SearchUserBox>
            <SearchUserInput
              onChange={(e) => setSearchUserValue(e.target.value)}
              value={searchUserValue}
              placeholder="جستجوی کاربر بر اساس نام..."
              onKeyPress={(e) => e.key === "Enter" && handleSearchUser()}
            />
            <SearchBoxBtn onClick={handleSearchUser}>جستجو</SearchBoxBtn>
          </SearchUserBox>

          <UserBoxs>
            {getUserLoading ? (
              <Loader />
            ) : noUsersFound ? (
              <div
                style={{
                  textAlign: "center",
                  padding: 40,
                  color: "var(--color-neutral)",
                }}>
                کاربری با این نام یافت نشد
              </div>
            ) : (
              displayUsers.map((user, index) => (
                <UserBox
                  key={user.id}
                  style={{ animationDelay: `${index * 0.05}s` }}>
                  <UserAvatar>
                    {user.UserName?.charAt(0).toUpperCase()}
                  </UserAvatar>
                  <UserInfo>
                    <UserBoxName>{user.UserName}</UserBoxName>
                    <UserBoxId>شناسه: {user.id}</UserBoxId>
                  </UserInfo>
                  <UserBoxRoll>
                    {user.IsAdmin ? (
                      <AdminPanelSettingsIcon />
                    ) : (
                      <AccountCircleIcon />
                    )}
                  </UserBoxRoll>
                  <UserBoxActions>
                    <AdminBtn
                      onClick={() => handleChangeRoll(user)}
                      $bg={
                        user.IsAdmin
                          ? "rgba(192, 123, 116, 0.25)"
                          : "rgba(108, 146, 160, 0.25)"
                      }>
                      {user.IsAdmin ? "کاهش سطح" : "ارتقا به ادمین"}
                    </AdminBtn>
                    <DeleteIconStyled onClick={() => handleDeleteUser(user)} />
                  </UserBoxActions>
                </UserBox>
              ))
            )}
            {error && (
              <div
                style={{
                  color: "var(--color-accent)",
                  padding: 10,
                  textAlign: "center",
                }}>
                {error}
              </div>
            )}
          </UserBoxs>
        </UsersContainer>

        <RightSection>
          <StatsContainer>
            <StatsGrid>
              <StatCard>
                <StatIcon>
                  <AccountCircleIcon />
                </StatIcon>
                <StatValue>{stats.totalUsers}</StatValue>
                <StatLabel>کل کاربران</StatLabel>
              </StatCard>
              <StatCard>
                <StatIcon>
                  <NewspaperIcon />
                </StatIcon>
                <StatValue>{stats.totalNews}</StatValue>
                <StatLabel>کل اخبار</StatLabel>
              </StatCard>
              <StatCard>
                <StatIcon>
                  <AdminPanelSettingsIcon />
                </StatIcon>
                <StatValue>{stats.admins}</StatValue>
                <StatLabel>ادمین‌ها</StatLabel>
              </StatCard>
              <StatCard>
                <StatIcon>
                  {" "}
                  <WhatshotIcon />
                </StatIcon>
                <StatValue>{stats.trending}</StatValue>
                <StatLabel>خبر ترند</StatLabel>
              </StatCard>
            </StatsGrid>
          </StatsContainer>

          <NewsEditorContainer>
            <NewsEditorWrapper>
              <SearchNewsBox filterNewsHandler={filteredNews} />
              <div style={{ overflowY: "auto", flex: 1 }}>
                <NewsEditorTable>
                  <NewsEditorTableCaption>
                    لیست آخرین اخبار سایت
                  </NewsEditorTableCaption>
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
                      <tr>
                        <Td colSpan="6" style={{ textAlign: "center" }}>
                          <Loader />
                        </Td>
                      </tr>
                    ) : searchedNews.length === 0 ? (
                      <tr>
                        <Td colSpan="6" style={{ textAlign: "center" }}>
                          {" "}
                          خبری برای نمایش وجود ندارد
                        </Td>
                      </tr>
                    ) : (
                      searchedNews.map((item, index) => (
                        <TableRow
                          key={item.id}
                          style={{ animationDelay: `${index * 0.03}s` }}>
                          <Td
                            style={{
                              maxWidth: 250,
                              fontWeight: "900",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}>
                            {item.NewsTitle}
                          </Td>
                          <Td>
                            <span
                              style={{
                                background: "var(--color-primary)",
                                fontWeight: "900",
                                padding: "4px 12px",
                                fontSize: 18,
                                color: "var(--color-accent)",
                              }}>
                              {item.NewsSubject}
                            </span>
                          </Td>
                          <Td>
                            {item.MainImage ? (
                              <TableImage src={item.MainImage} />
                            ) : (
                              "—"
                            )}
                          </Td>
                          <Td>{item.Journalist || "—"}</Td>
                          <Td>
                            {new Date(item.NewsDate).toLocaleDateString(
                              "fa-IR",
                            )}
                          </Td>
                          <Td>
                            <ActionButton
                              onClick={() => navigage(`/news/${item.id}`)}>
                              <EditIcon />
                            </ActionButton>
                            <ActionButton
                              onClick={() => deleteNewsHandler(item.id)}>
                              <DeleteIcon />
                            </ActionButton>
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
      <DashboardWarning>
        <div>برای مشاهده باید با کامپیوتر وارد شوید</div>
      </DashboardWarning>
    </DashboardContainer>
  );
}

export default Dashboard;
