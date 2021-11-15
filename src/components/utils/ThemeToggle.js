import React from "react";

//Icons
import sunIcon from "../../assets/images/sun.png";
import moonIcon from "../../assets/images/moon.png";

//Context
import { useAppContext } from "../../context/AppContext";

const ThemeToggle = () => {
  const { appTheme, changeTheme, isShowAll } = useAppContext();
  return (
    <button
      className={`${
        isShowAll ? "theme-toggle-btn-fullPage" : "theme-toggle-btn"
      }`}
      onClick={changeTheme}
    >
      <img
        src={appTheme === "dark" ? sunIcon : moonIcon}
        alt={
          appTheme === "dark"
            ? "Icon of a bright sun"
            : "Icon of a crescent moon"
        }
      />
    </button>
  );
};

export default ThemeToggle;
