import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "absolute",
        top: 20,
        right: 30,
        background: "var(--primary)",
        border: "none",
        borderRadius: "50%",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "white",
        zIndex: 10000,
      }}
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

export default ThemeToggle;
