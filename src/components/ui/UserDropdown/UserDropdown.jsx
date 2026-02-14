import { useEffect, useRef, useState } from "react";
import { User, Wallet, Settings, Lock, Power } from "lucide-react";
import "./UserDropdown.css";
import avatarSrc from "../../../assets/avatar.jpeg";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDocMouseDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="ud" ref={wrapRef}>
      <button
        type="button"
        className="ud__btn"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <img className="ud__avatar" src={avatarSrc} alt="User" />
      </button>

      <div className={`ud__menu ${open ? "is-open" : ""}`} role="menu">
        <button type="button" className="ud__item" role="menuitem">
          <User size={16} className="ud-icon" />
          <span>Profile</span>
        </button>

        <button type="button" className="ud__item" role="menuitem">
          <Wallet size={16} className="ud-icon" />
          <span>My Wallet</span>
        </button>

        <button type="button" className="ud__item" role="menuitem">
          <Settings size={20} className="ud-icon" />
          <span className="ud__item-row">
            <span>Settings</span>
            <span className="ud__badge">11</span>
          </span>
        </button>

        <button type="button" className="ud__item" role="menuitem">
          <Lock size={16} className="ud-icon" />
          <span>Lock screen</span>
        </button>

        <div className="ud__divider" />

        <button
          type="button"
          className="ud__item ud__item--danger"
          role="menuitem"
        >
          <Power size={16} className="ud-icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
