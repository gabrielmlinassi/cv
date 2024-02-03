import { useCallback } from "react";
import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { setTheme, resolvedTheme } = useNextTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [setTheme, resolvedTheme]);

  return { toggleTheme };
};
