import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ShoppingCart,
  MessageCircle,
  Martini,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import "./NotificationsDropdown.css";
import { IoMdNotificationsOutline } from "react-icons/io";

const ITEMS = [
  {
    id: 1,
    icon: <ShoppingCart size={16} />,
    title: "Your order is placed",
    desc: "If several languages coalesce the grammar",
    ring: "success",
  },
  {
    id: 2,
    icon: <MessageCircle size={16} />,
    title: "New Message received",
    desc: "You have 87 unread messages",
    ring: "warning",
  },
  {
    id: 3,
    icon: <Martini size={16} />,
    title: "Your item is shipped",
    desc: "It is a long established fact that a reader will",
    ring: "info",
  },
  {
    id: 4,
    icon: <ShoppingCart size={16} />,
    title: "Your order is placed",
    desc: "Dummy text of the printing and typesetting industry.",
    ring: "primary",
  },
  {
    id: 5,
    icon: <MessageCircle size={16} />,
    title: "New Message received",
    desc: "You have 87 unread messages",
    ring: "warning",
  },
];

export default function NotificationsDropdown({
  badgeCount = 3,
  totalText = "Notifications (258)",
  onViewAll,
}) {
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
    <div className="noti" ref={wrapRef}>
      <button
        type="button"
        className="noti__btn"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <IoMdNotificationsOutline size={26} />
        {badgeCount > 0 && <span className="noti__badge">{badgeCount}</span>}
      </button>

      <div className={`noti__menu ${open ? "is-open" : ""}`} role="menu">
        <div className="noti__head">
          <h5 className="noti__title">{totalText}</h5>
        </div>

        <div className="noti__list" role="none">
          {ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              className="noti__item"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <div className={`noti__avatar ring-${it.ring}`}>{it.icon}</div>

              <div className="noti__content">
                <h6 className="noti__item-title">{it.title}</h6>
                <p className="noti__item-desc">{it.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="noti__foot">
          <button
            type="button"
            className="noti__viewall"
            onClick={() => onViewAll?.()}
          >
            <ArrowRightCircle size={14} />
            View all
          </button>
        </div>
      </div>
    </div>
  );
}
