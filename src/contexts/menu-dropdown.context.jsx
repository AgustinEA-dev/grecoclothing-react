import { createContext, useState} from "react";

export const MenuDropdownContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const MenuDropDownProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const value = { isMenuOpen, setIsMenuOpen, toggleIsMenuOpen };

  return (
    <MenuDropdownContext.Provider value={value}>
      {children}
    </MenuDropdownContext.Provider>
  );
};
