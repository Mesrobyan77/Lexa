import { AnimatePresence, motion } from "framer-motion";
import { Mail, FileText, PieChart, File, } from "lucide-react";
import { TfiDashboard } from "react-icons/tfi";
import { IoBagAddOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useEffect, useLayoutEffect, useState } from "react";
import "./MobileMenu.css";

function Section({ icon, label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mm-section">
      <button className="mm-item" type="button" onClick={() => setOpen((s) => !s)}>
        <span className="mm-ico">{icon}</span>
        <span className="mm-text">{label}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="mm-sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubLink({ children, href = "#" }) {
  return (
    <a className="mm-sublink" href={href} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
}

export default function MobileMenu({ open, onClose }) {
  const [headerH, setHeaderH] = useState(0);

  useLayoutEffect(() => {
    if (!open) return;
  
    const el = document.querySelector(".navbar-header");
    if (!el) return;
  
    let rafId = 0;
  
    const setIfChanged = (h) => {
      setHeaderH((prev) => (prev === h ? prev : h));
    };
  

    rafId = requestAnimationFrame(() => {
      const h = Math.round(el.getBoundingClientRect().height);
      setIfChanged(h);
    });
  
    const ro = new ResizeObserver((entries) => {
      const h = Math.round(entries[0].contentRect.height);
      setIfChanged(h);
    });
  
    ro.observe(el);
  
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            className="mm-backdrop"
            style={{ top: headerH }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close menu"
            type="button"
          />

          <motion.aside
            className="mm-panel"
            style={{ top: headerH + 15,  height: 500 }}
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
          >

            <nav className="mm-nav">
              <a
                className="mm-item is-active"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="mm-ico">
                  <TfiDashboard size={18} />
                </span>
                <span className="mm-text">Dashboard</span>
              </a>

              <Section label="Email" icon={<Mail size={18} />}>
                <SubLink>Inbox</SubLink>
                <SubLink>Read Email</SubLink>
                <SubLink>Email Compose</SubLink>
              </Section>

              <Section label="UI Elements" icon={<IoBagAddOutline size={20} />}>
                <SubLink>Alerts</SubLink>
                <SubLink>Buttons</SubLink>
                <SubLink>Cards</SubLink>
                <SubLink>Tabs</SubLink>
              </Section>

              <Section label="Forms" icon={<FileText size={18} />}>
                <SubLink>Form Elements</SubLink>
                <SubLink>Validation</SubLink>
                <SubLink>Uploads</SubLink>
              </Section>

              <Section label="More" icon={<FaListUl size={18} />}>
                <SubLink>Calendar</SubLink>
                <SubLink>Chat</SubLink>
                <SubLink>Kanban</SubLink>
              </Section>

              <Section label="Charts" icon={<PieChart size={18} />}>
                <SubLink>Chartjs</SubLink>
                <SubLink>Flot</SubLink>
              </Section>

              <Section label="Pages" icon={<File size={18} />}>
                <SubLink>Timeline</SubLink>
                <SubLink>Invoice</SubLink>
                <SubLink>Login</SubLink>
              </Section>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
