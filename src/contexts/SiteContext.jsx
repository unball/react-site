import React, { createContext, useContext, useState } from "react";

const menuItens = [
  { title: "Início", href: "#root" },
  // { title: "Competições", href: "#competitions" },
  { title: "Membros", href: "#members" },
  { title: "Áreas", href: "#areas" },
  { title: "Contato", href: "#contact" },
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
