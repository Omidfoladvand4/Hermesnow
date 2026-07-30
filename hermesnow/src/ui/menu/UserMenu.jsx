import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "../../components/MenuItem";
import { Link, useLocation } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { fadeInRight } from "../../styles/animations";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const UserMenuContainer = styled.main`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  animation: ${fadeInRight} 0.3s linear;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 0;
  }
`;

const LinkItem = styled(Link)`
  color: ${(props) =>
    props.$active ? "var(--color-primary)" : "var(--color-accent)"};
  text-decoration: none;
`;

const LogoutButton = styled.div`
  color: var(--color-accent);
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
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
      <MenuItem>
        <LinkItem to="/" $active={location.pathname === "/"}>
          <HomeIcon
            fontSize="large"
            sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
          />
        </LinkItem>
      </MenuItem>

      <MenuItem>
        <LinkItem to="/top-news" $active={location.pathname === "/top-news"}>
          <AccessTimeIcon
            fontSize="large"
            sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
          />
        </LinkItem>
      </MenuItem>

      <MenuItem>
        <LinkItem to="/settings" $active={location.pathname === "/settings"}>
          <SettingsInputCompositeIcon
            fontSize="large"
            sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
          />
        </LinkItem>
      </MenuItem>

      {!user && (
        <MenuItem>
          <LinkItem to="/login" $active={location.pathname === "/login"}>
            <LoginIcon
              fontSize="large"
              sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
            />
          </LinkItem>
        </MenuItem>
      )}

      {user && (
        <MenuItem>
          <LogoutButton onClick={handleLogoutClick}>
            <LogoutIcon
              fontSize="large"
              sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
            />
          </LogoutButton>
        </MenuItem>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
        title="خروج از حساب کاربری"
        message="آیا از خروج خود اطمینان دارید؟"
        confirmText="خروج"
        cancelText="انصراف"
        type = 'warning'
        icon= <LogoutIcon /> 
       />
    </UserMenuContainer>
  );
}

export default UserMenu;