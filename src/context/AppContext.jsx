import React, { useContext, useState } from "react";

/* This context is mainly used for navbar purposes
>Conditionally display Burger-menu or X btn
>Conditionally display Navbar dropdown panel
*/

//Create Context
const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        setIsMenuOpen,
        isMenuOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook for easier accessibility to context
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
