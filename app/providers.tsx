"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";

export const TerminalContext = createContext({
  isOpen: true,
  toggleIsOpen: () => {},
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TerminalContext.Provider value={{ isOpen, toggleIsOpen }}>
        {children}
      </TerminalContext.Provider>
    </ThemeProvider>
  );
}
