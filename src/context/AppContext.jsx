import React, { useContext, useState } from "react";

//Create Context
const AppContext = React.createContext();
const bodyTag = document.getElementById("bodyTag");

const AppContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [appTheme, setAppTheme] = useState("light");
  //State for navbar < 768px
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //State for projects
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectInfo, setProjectInfo] = useState({});
  //State for skills section dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeTheme = () => {
    bodyTag.classList.contains("dark")
      ? bodyTag.classList.replace("dark", "light") && setAppTheme("light")
      : bodyTag.classList.replace("light", "dark") && setAppTheme("dark");
  };

  const handleChangePage = e => {
    const pageSelected = e.currentTarget.name;
    setCurrentPage(pageSelected);
    isMenuOpen && setIsMenuOpen(false);
  };

  // const handleModalView = (e) => {
  //   const projectSelected = e.currentTarget.name;
  //   const projectSelectedInfo = projects.find(
  //     (project) => project.name === projectSelected
  //   );
  //   setProjectInfo(projectSelectedInfo);
  //   setIsModalOpen(true);
  // };

  return (
    <AppContext.Provider
      value={{
        changeTheme,
        appTheme,
        currentPage,
        handleChangePage,
        isDropdownOpen,
        setIsDropdownOpen,
        setIsMenuOpen,
        isMenuOpen,
        handleModalView,
        setIsModalOpen,
        isModalOpen,
        projectInfo,
      }}>
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook for easier accessibility to context
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
