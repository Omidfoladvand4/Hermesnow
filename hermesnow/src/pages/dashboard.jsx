import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
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
} from "../styles/animations";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminNewsCard from "../components/AdminNewsCard";
import Modal from "../components/Modal";
import { toPersianNumbers } from "../services/persionNumber";

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  position: relative;
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

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  border-right: 2px solid var(--color-info);
  animation: ${slideInFromLeft} 0.5s ease-out;

  @media (max-width: 768px) {
    order: 1;
    border-right: none;
    height: auto;
    max-height: 60vh;
  }
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

  @media (max-width: 480px) {
    flex-direction: column;
  }
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

  @media (max-width: 480px) {
    padding: 16px 0;
  }
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

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserBoxName = styled.div`
  font-weight: 800;
  color: var(--color-secondary);
  font-size: var(--font-size-lg);
  margin-bottom: 4px;
`;


const UserBoxRoll = styled.div`
  border-radius: 20px;
  color: white;
  display: inline-block;
  font-weight: 900;
  svg {
    font-size: var(--font-size-xxl);
  }
`;

const UserBoxActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const AdminBtn = styled.button`
  padding: 4px 12px;
  background: var(--color-accent);
  border: none;
  border-radius: 10px;
  color: var(--color-secondary);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
  font-size: var(--font-size-md);
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

  @media (max-width: 768px) {
    height: auto;
    min-height: 70vh;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
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

  @media (max-width: 480px) {
    padding: 15px 10px;
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

  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
  }
`;

const StatLabel = styled.div`
  font-size: var(--font-size-xl);
  color: var(--color-info);
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`;

const NewsEditorContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 10px;
    gap: 12px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--color-neutral);
  font-size: var(--font-size-lg);
  width: 100%;
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
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); 

  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  const handleSearchUser = () => {
    if (searchUserValue.trim() === "") {
      setFilteredUsers([]);
    } else {
      const filtered = users.filter((user) =>
        user.UserName?.toLowerCase().includes(searchUserValue.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const openDeleteNewsModal = (id) => {
    setModalData({ id, type: "news" });
    setIsModalOpen(true);
  };

  const openDeleteUserModal = (user) => {
    setModalData({
      id: user.id,
      type: "user",
      userName: user.UserName,
    });
    setIsModalOpen(true);
  };

  const openRoleModal = (user) => {
    const isAdmin = user.IsAdmin;
    setModalData({
      id: user.id,
      type: "role",
      userName: user.UserName,
      isAdmin: isAdmin,
      action: isAdmin ? "کاهش سطح" : "ارتقا به ادمین",
    });
    setIsModalOpen(true);
  };

  const handleConfirmModal = async () => {
    if (!modalData) return;

    setIsLoading(true);

    try {
      switch (modalData.type) {
        case "news":
          await deleteNews({ newsId: modalData.id });
          Newsrefetch();
          break;

        case "user":
          await deleteUser(modalData.id, refetch);
          break;

        case "role":
          if (modalData.isAdmin) {
            await demoteFromAdmin(modalData.id, refetch);
          } else {
            await promoteToAdmin(modalData.id, refetch);
          }
          break;

        default:
          break;
      }
    } catch (err) {
      console.error("خطا در عملیات:", err);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
      setModalData(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
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
        item.Journalist?.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedNews(filtered);
  };

  const displayUsers = filteredUsers.length > 0 ? filteredUsers : users;
  const noUsersFound =
    filteredUsers.length === 0 && searchUserValue.trim() !== "";

  const stats = useMemo(
    () => ({
      totalUsers: toPersianNumbers(users?.length) || 0,
      totalNews: toPersianNumbers(news?.length) || 0,
      admins: toPersianNumbers(users?.filter((u) => u.IsAdmin).length) || 0,
      trending: toPersianNumbers(news?.filter((n) => n.IsTrend).length) || 0,
    }),
    [users, news]
  );

  const getModalProps = () => {
    if (!modalData) return {};

    switch (modalData.type) {
      case "news":
        return {
          title: "حذف خبر",
          message: "آیا از حذف این خبر اطمینان دارید؟ این عمل غیرقابل بازگشت است.",
          confirmText: "حذف",
          icon: <DeleteIcon />
        };

      case "user":
        return {
          title: "حذف کاربر",
          message: `آیا از حذف کاربر "${modalData.userName}" اطمینان دارید؟ این عمل غیرقابل بازگشت است.`,
          confirmText: "حذف",
          icon: <DeleteIcon />,
        };

      case "role":
        return {
          title: modalData.isAdmin ? "کاهش سطح کاربر" : "ارتقا سطح کاربر",
          message: modalData.isAdmin
            ? `آیا از کاهش سطح کاربر "${modalData.userName}" از ادمین به کاربر عادی اطمینان دارید؟`
            : `آیا از ارتقا سطح کاربر "${modalData.userName}" به ادمین اطمینان دارید؟`,
          confirmText: modalData.isAdmin ? "کاهش سطح" : "ارتقا سطح",
          icon: modalData.isAdmin ?  <TrendingDownIcon /> : <UpgradeIcon />,
        };

      default:
        return {};
    }
  };

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
                }}
              >
                کاربری با این نام یافت نشد
              </div>
            ) : (
              displayUsers.map((user, index) => (
                <UserBox
                  key={user.id}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <UserInfo>
                    <UserBoxName>{user.UserName}</UserBoxName>
                  </UserInfo>
                  <UserBoxRoll>
                    {user.IsAdmin ? (
                      <AdminPanelSettingsIcon />
                    ) : (
                      <AccountCircleIcon />
                    )}
                  </UserBoxRoll>
                  <UserBoxActions>
                    <AdminBtn onClick={() => openRoleModal(user)}>
                      {user.IsAdmin ? "کاهش" : "ارتقا"}
                    </AdminBtn>
                    <DeleteIconStyled onClick={() => openDeleteUserModal(user)} />
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
                }}
              >
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
              <NewsGrid>
                {getNewsLoading ? (
                  <Loader />
                ) : searchedNews.length === 0 ? (
                  <EmptyState>خبری برای نمایش وجود ندارد</EmptyState>
                ) : (
                  searchedNews.map((item, index) => (
                    <AdminNewsCard
                      key={item.id}
                      item={item}
                      index={index}
                      onEdit={(id) => navigate(`/news/${id}`)}
                      onDelete={() => openDeleteNewsModal(item.id)}
                    />
                  ))
                )}
              </NewsGrid>
            </NewsEditorWrapper>
          </NewsEditorContainer>
        </RightSection>
      </DashboardWrapper>

      {isModalOpen && modalData && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleConfirmModal}
          {...getModalProps()}
        />
      )}
    </DashboardContainer>
  );
}

export default Dashboard;