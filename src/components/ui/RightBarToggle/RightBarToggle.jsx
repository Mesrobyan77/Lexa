import { IoMdSettings } from "react-icons/io";
import "./RightBarToggle.css";

export default function RightBarToggle({ onClick }) {
  return (
    <button
      type="button"
      className="rb-btn"
      onClick={onClick}
      aria-label="Open settings"
      title="Settings"
    >
      <IoMdSettings size={22} className="rb-btn__icon" />
    </button>
  );
}
