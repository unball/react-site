import React, { createContext, useContext, useState } from "react";

const menuItens = [
  { title: "Início", href: "" },
  { title: "Competições", href: "" },
  { title: "Áreas", href: "" },
  { title: "Membros", href: "" },
  { title: "Contato", href: "" },
  { title: "Seja um apoiador", href: "", style: true },
];

const initialValue = {
  mobileOpen: false,
  menuItens
};


export const SiteContext = createContext(initialValue);

export function SiteContextProvider({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const contextValue = {
    mobileOpen,
    setMobileOpen,
    menuItens,
  };

  return (
    <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>
  );
}

export function useSiteContext() {
  return useContext(SiteContext);
}
