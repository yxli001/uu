import { useEffect, useState } from "react";

/**
 * Hook to toggle between light and dark theme.
 *
 * @returns {Array} An array containing the current theme and a function to toggle the theme.
 */
export const useTheme = (): [
  theme: "light" | "dark",
  toggleTheme: () => void,
] => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark";

    if (localTheme) {
      setTheme(localTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (prefersDarkMode) {
        setTheme("dark");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return [
    theme,
    () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    },
  ];
};
