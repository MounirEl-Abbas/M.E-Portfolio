import React, { useContext, useState } from "react";

//Create Context
const AppContext = React.createContext();
const bodyTag = document.getElementById("bodyTag");

const AppContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [appTheme, setAppTheme] = useState("dark");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShowAll, setIsShowAll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeTheme = () => {
    bodyTag.classList.contains("dark")
      ? bodyTag.classList.replace("dark", "light") && setAppTheme("light")
      : bodyTag.classList.replace("light", "dark") && setAppTheme("dark");
  };

  const handleChangePage = (e) => {
    const pageSelected = e.currentTarget.name;
    setCurrentPage(pageSelected);
    isMenuOpen && setIsMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        changeTheme,
        appTheme,
        currentPage,
        handleChangePage,
        isDropdownOpen,
        setIsDropdownOpen,
        setIsShowAll,
        isShowAll,
        setIsMenuOpen,
        isMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook for easier accessibility to context
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
