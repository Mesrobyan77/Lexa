import { NavLink, Link } from "react-router-dom";
import {
  Mail,
  FileText,
  PieChart,
  File,
  ChevronDown,
  CornerDownRight,
} from "lucide-react";
import "./TopNav.css";
import { TfiDashboard } from "react-icons/tfi";
import { IoBagAddOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

function ItemLink({ to, icon, label }) {
  return (
    <li className="top-item">
      <NavLink
        to={to}
        className={({ isActive }) => `top-link ${isActive ? "is-active" : ""}`}
      >
        <span className="top-ico">{icon}</span>
        <span className="top-text">{label}</span>
      </NavLink>
    </li>
  );
}

function Drop({ label, icon, align = "left", children }) {
  return (
    <li className={`top-item top-dd`}>
      <div className="top-link top-dd-btn" tabIndex={0}>
        <span className="top-ico">{icon}</span>
        <span className="top-text">{label}</span>
        <ChevronDown size={16} className="top-chev" />
      </div>

      <div className={`top-menu top-menu--${align}`}>{children}</div>
    </li>
  );
}

function MenuLink({ to, children }) {
  return (
    <Link className="top-menu-item" to={to}>
      {children}
    </Link>
  );
}

function SubDrop({ label, children, align = "right" }) {
  return (
    <div className="top-subdd">
      <div className="top-menu-item top-subdd-btn" tabIndex={0}>
        <span>{label}</span>
        <CornerDownRight size={16} className="top-subchev" />
      </div>

      <div className={`top-menu top-menu--${align} top-menu--sub`}>
        {children}
      </div>
    </div>
  );
}

function Mega({ cols = 3, children }) {
  return <div className={`top-mega top-mega--${cols}col`}>{children}</div>;
}

function MegaCol({ children }) {
  return <div className="top-mega-col">{children}</div>;
}

export default function TopNav() {
  return (
    <div className="top-wrap">
      <div className="top-container">
        <div className="top-bar">
          <nav className="top-nav" aria-label="Top navigation">
            <ul className="top-list">
              <ItemLink
                to="/dashboard"
                icon={<TfiDashboard size={18} />}
                label="Dashboard"
              />

              <Drop label="Email" icon={<Mail size={18} />}>
                <MenuLink to="/email/inbox">Inbox</MenuLink>
                <MenuLink to="/email/read">Email Read</MenuLink>
                <MenuLink to="/email/compose">Email Compose</MenuLink>
              </Drop>

              <Drop label="UI Elements" icon={<IoBagAddOutline size={20} />}>
                <Mega cols={3}>
                  <MegaCol>
                    <MenuLink to="/ui/alerts">Alerts</MenuLink>
                    <MenuLink to="/ui/buttons">Buttons</MenuLink>
                    <MenuLink to="/ui/badge">Badge</MenuLink>
                    <MenuLink to="/ui/cards">Cards</MenuLink>
                    <MenuLink to="/ui/carousel">Carousel</MenuLink>
                    <MenuLink to="/ui/dropdowns">Dropdowns</MenuLink>
                    <MenuLink to="/ui/utilities">Utilities</MenuLink>
                  </MegaCol>

                  <MegaCol>
                    <MenuLink to="/ui/grid">Grid</MenuLink>
                    <MenuLink to="/ui/images">Images</MenuLink>
                    <MenuLink to="/ui/lightbox">Lightbox</MenuLink>
                    <MenuLink to="/ui/offcanvas">Offcanvas</MenuLink>
                    <MenuLink to="/ui/modals">Modals</MenuLink>
                    <MenuLink to="/ui/colors">Colors</MenuLink>
                    <MenuLink to="/ui/pagination">Pagination</MenuLink>
                  </MegaCol>

                  <MegaCol>
                    <MenuLink to="/ui/popover">Popover & Tooltips</MenuLink>
                    <MenuLink to="/ui/progressbars">Progress Bars</MenuLink>
                    <MenuLink to="/ui/sweet-alert">Sweet-Alert</MenuLink>
                    <MenuLink to="/ui/tabs">Tabs & Accordions</MenuLink>
                    <MenuLink to="/ui/typography">Typography</MenuLink>
                    <MenuLink to="/ui/video">Video</MenuLink>
                  </MegaCol>
                </Mega>
              </Drop>

              <Drop label="Forms" icon={<FileText size={18} />}>
                <MenuLink to="/forms/elements">Form Elements</MenuLink>
                <MenuLink to="/forms/validation">Form Validation</MenuLink>
                <MenuLink to="/forms/advanced">Form Advanced</MenuLink>
                <MenuLink to="/forms/editors">Form Editors</MenuLink>
                <MenuLink to="/forms/uploads">Form File Upload</MenuLink>
                <MenuLink to="/forms/xeditable">Form Xeditable</MenuLink>
              </Drop>

              <Drop label="More" icon={<FaListUl  size={18} />}>
                <MenuLink to="/calendar">Calendar</MenuLink>
                <MenuLink to="/chat">Chat</MenuLink>
                <MenuLink to="/kanban">Kanban Board</MenuLink>

                <div className="top-divider" />

                <SubDrop label="Icons">
                  <MenuLink to="/icons/material">Material Design</MenuLink>
                  <MenuLink to="/icons/ion">Ion Icons</MenuLink>
                  <MenuLink to="/icons/fontawesome">Font Awesome</MenuLink>
                  <MenuLink to="/icons/themify">Themify Icons</MenuLink>
                  <MenuLink to="/icons/dripicons">Dripicons</MenuLink>
                  <MenuLink to="/icons/typicons">Typicons Icons</MenuLink>
                </SubDrop>

                <SubDrop label="Tables">
                  <MenuLink to="/tables/basic">Basic Tables</MenuLink>
                  <MenuLink to="/tables/datatable">Data Table</MenuLink>
                  <MenuLink to="/tables/responsive">Responsive Table</MenuLink>
                  <MenuLink to="/tables/editable">Editable Table</MenuLink>
                </SubDrop>

                <SubDrop label="Maps">
                  <MenuLink to="/maps/google">Google Map</MenuLink>
                  <MenuLink to="/maps/vector">Vector Map</MenuLink>
                </SubDrop>

                <div className="top-divider" />

                <MenuLink to="/ui/rangeslider">Range Slider</MenuLink>
                <MenuLink to="/ui/session-timeout">Session Timeout</MenuLink>
              </Drop>

              <Drop label="Charts" icon={<PieChart size={18} />}>
                <MenuLink to="/charts/morris">Morris Chart</MenuLink>
                <MenuLink to="/charts/chartist">Chartist Chart</MenuLink>
                <MenuLink to="/charts/chartjs">Chartjs Chart</MenuLink>
                <MenuLink to="/charts/flot">Flot Chart</MenuLink>
                <MenuLink to="/charts/c3">C3 Chart</MenuLink>
                <MenuLink to="/charts/other">Jquery Knob Chart</MenuLink>
              </Drop>

              <Drop label="Pages" icon={<File size={18} />} align="right">
                <Mega cols={2}>
                  <MegaCol>
                    <MenuLink to="/pages/timeline">Timeline</MenuLink>
                    <MenuLink to="/pages/invoice">Invoice</MenuLink>
                    <MenuLink to="/pages/directory">Directory</MenuLink>
                    <MenuLink to="/pages/login">Login</MenuLink>
                    <MenuLink to="/pages/register">Register</MenuLink>
                  </MegaCol>

                  <MegaCol>
                    <MenuLink to="/pages/recoverpw">Recover Password</MenuLink>
                    <MenuLink to="/pages/lock-screen">Lock Screen</MenuLink>
                    <MenuLink to="/pages/blank">Blank Page</MenuLink>
                    <MenuLink to="/pages/404">Error 404</MenuLink>
                    <MenuLink to="/pages/500">Error 500</MenuLink>
                  </MegaCol>
                </Mega>
              </Drop>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
