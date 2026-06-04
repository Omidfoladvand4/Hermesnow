import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { fadeInRight } from '../../styles/animations'
import { useAuth } from '../../contexts/AuthContext';

const AdminMenuContainer = styled.main`
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: space-between;
             padding: 10px 30px;
            animation: ${fadeInRight} 0.3s linear;
              @media (max-width : 786px) {
              width: 100%;
              padding: 0;
              justify-content: center;
    
  }

`


const LinkItem = styled(Link)`
  color : var(--color-primary);
  text-decoration: none;
`

function AdminMenu() {
  const { user } = useAuth()

  return (
    <AdminMenuContainer>
        <MenuItem>
          <LinkItem to="/Account">
            <AccountCircleIcon fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/>
          </LinkItem>
        </MenuItem>

     {(user?.IsAdmin || user?.IsMainAdmin) && (
        <MenuItem>
          <LinkItem to="/news-editor">
            <AddBoxIcon fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/>
          </LinkItem>
        </MenuItem>
      )}

      {user?.IsMainAdmin && (
        <MenuItem>
          <LinkItem to="/dashboard">
            <DashboardIcon fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/>
          </LinkItem>
        </MenuItem>
      )}




        <MenuItem>
          <LinkItem to="/your-news">
           <NewspaperIcon 
  fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/>
           
          </LinkItem>
        </MenuItem>
        <MenuItem>
         <LinkItem to='/product-info'> <ProductionQuantityLimitsIcon  fontSize='large' sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/></LinkItem>
        </MenuItem>
    </AdminMenuContainer>
  )
}

export default AdminMenu   