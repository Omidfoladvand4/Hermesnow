import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { fadeInRight } from "../../styles/animations";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const UserMenuContainer = styled.nav`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  animation: ${fadeInRight} 0.3s linear;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    gap: 16px;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${(props) =>
    props.$active ? "var(--color-primary)" : "var(--color-accent)"};
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2px;
    padding: 4px 8px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-size: var(--font-size-lg);
  font-weight: 900;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

const LogoutButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--color-accent);
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 8px 16px;
  border-radius: 12px;

  &:hover {
    color: var(--color-primary);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2px;
    padding: 4px 8px;
  }
`;

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    navigate("/");
    logout();
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <UserMenuContainer>
      <NavItem to="/" $active={location.pathname === "/"}>
        <IconWrapper>
          <HomeIcon
            fontSize="large"
            sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
          />
        </IconWrapper>
        <Label>خانه</Label>
      </NavItem>

      <NavItem to="/archive" $active={location.pathname === "/archive"}>
        <IconWrapper>
          <AccessTimeIcon
            fontSize="large"
            sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
          />
        </IconWrapper>
        <Label>ارشیو</Label>
      </NavItem>

      <NavItem to="/settings" $active={location.pathname === "/settings"}>
        <IconWrapper>
          <SettingsIcon
            fontSize="large"
            sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
          />
        </IconWrapper>
        <Label>تنظیمات</Label>
      </NavItem>

      {!user && (
        <NavItem to="/login" $active={location.pathname === "/login"}>
          <IconWrapper>
            <LoginIcon
              fontSize="large"
              sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
            />
          </IconWrapper>
          <Label>ورود</Label>
        </NavItem>
      )}

      {user && (
        <LogoutButton onClick={handleLogoutClick}>
          <IconWrapper>
            <LogoutIcon
              fontSize="large"
              sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
            />
          </IconWrapper>
          <Label>خروج</Label>
        </LogoutButton>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
        title="خروج از حساب کاربری"
        message="آیا از خروج خود اطمینان دارید؟"
        confirmText="خروج"
        cancelText="انصراف"
        icon={<LogoutIcon />}
      />
    </UserMenuContainer>
  );
}

export default UserMenu;