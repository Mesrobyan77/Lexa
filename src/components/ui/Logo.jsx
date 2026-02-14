import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

import logoDark from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";

export default function Logo() {
  const { isLight } = useContext(ThemeContext);

  return (
    <img
      src={isLight ? logoLight : logoDark}
      alt="Logo"
      style={{ height: "19px" }}
    />
  );
}
