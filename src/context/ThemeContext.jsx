import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = sessionStorage.getItem("theme");
       if (saved) return saved === "dark";
       return true;
    });

    useEffect(() => {
        if(darkMode) {
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
        }
        sessionStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={ { darkMode, setDarkMode} }>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);