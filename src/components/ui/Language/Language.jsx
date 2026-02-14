import { useEffect, useRef, useState } from "react";
import { LANGS } from "../../../costants/Languages";

import "./Language.css";

export default function Language({ onChange }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(LANGS[0]);
  const wrapRef = useRef(null);

  const selectLang = (l) => {
    setLang(l);
    setOpen(false);
    onChange?.(l);
  };

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
    <div className="dd" ref={wrapRef}>
      <button
        type="button"
        className="dd__toggle"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <img className="dd__flag" src={lang.flag} alt={lang.label} />
        <span className="dd__label">{lang.label}</span>
        <span className={`dd__chev ${open ? "is-open" : ""}`}>▾</span>
      </button>

      <div className={`dd__menu ${open ? "is-open" : ""}`} role="menu">
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            className="dd__item"
            role="menuitem"
            onClick={() => selectLang(l)}
          >
            <img className="dd__item-flag" src={l.flag} alt={l.label} />
            <span className="dd__item-label">{l.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
