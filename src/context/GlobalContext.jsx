import { createContext, useState, useEffect } from "react";

export let GlobalContext = createContext();

function GlobalContextProvider({ children }) { // "childred" emas, "children"
    let [theme, setTheme] = useState(themeFromLocalStorage());

    function themeFromLocalStorage() {
        const theme = localStorage.getItem('theme');
        if (theme) {
            try {
                return JSON.parse(theme);
            } catch (error) {
                console.error("Mahalliy saqlashdan olingan tema noto'g'ri formatlangan:", error);
                localStorage.removeItem('theme');
            }
        }
        return false;
    }

    useEffect(() => {
        localStorage.setItem(`theme`, JSON.stringify(theme));
        document.documentElement.setAttribute(`data-theme`, theme ? `night` : 'light');
    }, [theme]);

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children} {/* "childred" emas, "children" */}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;