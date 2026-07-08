import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "../../components/MenuItem";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fadeInRight } from "../../styles/animations";
import { useAuth } from "../../contexts/AuthContext";

const AdminMenuContainer = styled.main`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  animation: ${fadeInRight} 0.3s linear;
  @media (max-width: 786px) {
    width: 100%;
    padding: 0;
    justify-content: center;
  }
`;

const LinkItem = styled(Link)`
  color: ${(props) =>
    props.$active ? "var(--color-primary)" : "var(--color-accent)"};
  text-decoration: none;
`;

function AdminMenu() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AdminMenuContainer>
      <MenuItem>
        <LinkItem to="/account" $active={location.pathname == "/account"}>
          <AccountCircleIcon
            fontSize="large"
            sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
          />
        </LinkItem>
      </MenuItem>

      {(user?.IsAdmin || user?.IsMainAdmin) && (
        <MenuItem>
          <LinkItem
            to="/news-editor"
            $active={location.pathname == "/news-editor"}>
            <AddBoxIcon
              fontSize="large"
              sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
            />
          </LinkItem>
        </MenuItem>
      )}

      {user?.IsAdmin && (
        <MenuItem>
          <LinkItem to="/dashboard" $active={location.pathname == "/dashboard"}>
            <DashboardIcon
              fontSize="large"
              sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
            />
          </LinkItem>
        </MenuItem>
      )}

      <MenuItem>
        <LinkItem to="/your-news" $active={location.pathname == "/your-news"}>
          <NewspaperIcon
            fontSize="large"
            sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
          />
        </LinkItem>
      </MenuItem>
    </AdminMenuContainer>
  );
}

export default AdminMenu;
