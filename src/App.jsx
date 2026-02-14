import { useLayoutEffect, useRef, useState } from "react";
import Dashboard from "./components/shared/Dashboard/Dashboard";
import NavbarHeader from "./components/shared/NavbarHeader/NavbarHeader";
import TopNavigation from "./components/shared/TopNavigation/TopNavigation";
import ThemeToggle from "./components/ui/ThemeToggle";
import MobileMenu from "./components/ui/MobileMenu/MobileMenu";

export default function App() {
  const [open, setOpen] = useState(false);
  const [headerH, setHeaderH] = useState(0);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setHeaderH(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="layout-wrapper">
      <div className="sticky-stack">
      <NavbarHeader ref={headerRef} onBurgerClick={() => setOpen(!open)} />
      <MobileMenu
        open={open}
        onClose={() => setOpen(!open)}
        topOffset={headerH}
        height={500}
      />
        <TopNavigation />
        <ThemeToggle />
      </div>

      <Dashboard />
    </div>
  );
}

