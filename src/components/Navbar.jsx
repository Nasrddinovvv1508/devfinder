import React, { useEffect, useState } from 'react';

// rrd
import { Link } from 'react-router-dom';

// icons
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

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

function Navbar() {
    // hooks
    let [theme, setTheme] = useState(themeFromLocalStorage());

    useEffect(() => {
        localStorage.setItem(`theme`, JSON.stringify(theme));
        document.documentElement.setAttribute(`data-theme`, theme ? `night` : 'light');
    }, [theme]);

    return (
        <div className="main-container navbar bg-transparent">
            <div className="navbar-start">
                <Link to={`/`} className="text-2xl font-bold text-[26px] -tracking-[1px]">
                    devfinder
                </Link>
            </div>

            <div className="navbar-end">
                <div
                    onClick={() => setTheme(!theme)}
                    className="cursor-pointer"
                >
                    {theme ? (
                        <div className="flex items-center gap-1">
                            <p className="uppercase select-none">Light</p>
                            <FaSun className='h-[20px] w-[20px]' />
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <p className="uppercase select-none">Dark</p>
                            <IoMdMoon className='h-[20px] w-[20px]' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;