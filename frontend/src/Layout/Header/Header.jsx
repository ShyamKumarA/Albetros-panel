import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
const Header = ({ setViewSidebar, viewSidebar }) => {
  const handleClick = () => {
    setViewSidebar(!viewSidebar);
  };

  return (
    <>
      <div className="header">
        <div className="header-items">
          <input type="text" placeholder="search" />
          {/* <a href="https://wa.me/+919567467858">
            <button className="contact-button"> */}
          {/* Contact Me  */}
          {/* <img alt="profile" src={person} /> */}
          {/* </button>
          </a> */}
          <div onClick={handleClick} className="menu-button">
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
