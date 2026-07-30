import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fadeInRight } from "../../styles/animations";
import { useAuth } from "../../contexts/AuthContext";

const AdminMenuContainer = styled.nav`
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
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

function AdminMenu() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AdminMenuContainer>
      <NavItem to="/account" $active={location.pathname === "/account"}>
        <IconWrapper>
          <AccountCircleIcon
            fontSize="large"
            sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
          />
        </IconWrapper>
        <Label>پروفایل</Label>
      </NavItem>

      {(user?.IsAdmin || user?.IsMainAdmin) && (
        <NavItem to="/news-editor" $active={location.pathname === "/news-editor"}>
          <IconWrapper>
            <AddBoxIcon
              fontSize="large"
              sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
            />
          </IconWrapper>
          <Label>افزودن خبر</Label>
        </NavItem>
      )}

      {user?.IsAdmin && (
        <NavItem to="/dashboard" $active={location.pathname === "/dashboard"}>
          <IconWrapper>
            <DashboardIcon
              fontSize="large"
              sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
            />
          </IconWrapper>
          <Label>داشبورد</Label>
        </NavItem>
      )}

      <NavItem to="/your-news" $active={location.pathname === "/your-news"}>
        <IconWrapper>
          <NewspaperIcon
            fontSize="large"
            sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
          />
        </IconWrapper>
        <Label>اخبار من</Label>
      </NavItem>
    </AdminMenuContainer>
  );
}

export default AdminMenu;