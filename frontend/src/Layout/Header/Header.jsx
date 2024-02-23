import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const Header = ({ setViewSidebar, viewSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate()
  const handleClick = () => {
    setViewSidebar(!viewSidebar);
  };
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/')
    logout()
  }

  return (
    <>
      <div className="header">
        <div className="header-items">
          <input type="text" placeholder="search" />
          <div onClick={handleLogout} className="log_out"><LogoutIcon style={{color:"red"}}/></div>
          <div onClick={handleClick} className="menu-button">
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
