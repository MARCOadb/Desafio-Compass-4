import "./style.scss";
import coralLogo from "../../assets/icon/coral.svg";
import menuIcon from "../../assets/icon/mobileMenu.svg";
import addIcon from "../../assets/icon/add-to-homescreen.svg";
import searchIcon from "../../assets/icon/search.svg";
import notificationIcon from "../../assets/icon/notification.svg";
import wishlistIcon from "../../assets/icon/wishlist.svg";
import profileIcon from "../../assets/icon/profile.svg";
import bagIcon from "../../assets/icon/bag.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import SearchBar from "../searchBar";

const Header = () => {
  const { phone, desktop } = useBreakpoint();

  return (
    <div className="headerContainer">
      {desktop ? (
        <>
          <img src={coralLogo} />
          <div className="navContainer">
            <button className="redirectBtn">Handbags</button>
            <button className="redirectBtn">Watches</button>
            <button className="redirectBtn">Skincare</button>
            <button className="redirectBtn">Jewellery</button>
            <button className="redirectBtn">Apparels</button>
          </div>
          <SearchBar text={"Search for products or brands....."} icon={true} />
          <div className="navContainer">
            <img src={wishlistIcon} alt="wishlistIcon" />
            <img src={profileIcon} alt="profileIcon" />
            <img src={bagIcon} alt="bagIcon" />
          </div>
        </>
      ) : (
        <>
          <div className="navContainer">
            <img src={menuIcon} alt="menuIcon" />
            <span>Home</span>
          </div>
          <div className="navContainer">
            <img src={addIcon} alt="addIcon" />
            <img src={searchIcon} alt="searchIcon" />
            <img src={notificationIcon} alt="notificationIcon" />
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
