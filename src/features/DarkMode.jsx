import { useEffect, useState } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
      
      document.body.className = savedTheme;
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.body.className = "dark";
    } else {
        document.body.className = "light";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
};