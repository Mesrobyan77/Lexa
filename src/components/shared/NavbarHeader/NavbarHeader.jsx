import { forwardRef } from "react";
import Logo from "../../ui/Logo";
import Language from "../../ui/Language/Language";
import SearchForm from "../../ui/Search/Search";
import { Menu, Search } from "lucide-react";
import NotificationsDropdown from "../../ui/NotificationsDropdown/NotificationsDropdown";
import UserDropdown from "../../ui/UserDropdown/UserDropdown";
import icon from "../../../assets/icon.png";
import RightBarToggle from "../../ui/RightBarToggle/RightBarToggle";
import { IoScan } from "react-icons/io5";
import "./NavbarHeader.css";

const NavbarHeader = forwardRef(function NavbarHeader({ onBurgerClick }, ref) {
  return (
    <div className="navbar-header" ref={ref}>
      <div className="container">
        <div className="container-fluid">
          <div className="float-start left-wrap">
            <a href="#" className="brand" onClick={(e) => e.preventDefault()}>
              <span className="logo-desktop"><Logo /></span>
              <img className="logo-mobile" src={icon} alt="Icon" />
            </a>

            <button
              className="burger-btn"
              type="button"
              aria-label="Menu"
              onClick={onBurgerClick}
            >
              <Menu size={22} />
            </button>
          </div>

          <div className="float-end">
            <div className="search-language desktop-only">
              <SearchForm />
              <Language />
            </div>

            <div className="set">
              <button className="icon-btn mobile-only" type="button" aria-label="Search">
                <Search size={20} />
              </button>

              <div className="desktop-only">
                <IoScan size={18} className="maximize" />
              </div>

              <NotificationsDropdown />
              <UserDropdown />
              <RightBarToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavbarHeader;
