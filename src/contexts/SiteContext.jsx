import React, { createContext, useContext, useState } from "react";

const menuItens = [
  { title: "Início", href: "/#" },
  // { title: "Competições", href: "/#competitions" },
  { title: "Sobre", href: "/#about" },
  { title: "Membros", href: "/#members" },
  { title: "Áreas", href: "/#areas" },
  { title: "Contato", href: "/#footer" },
  { title: "Seja um apoiador", href: "/support", style: true },
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
