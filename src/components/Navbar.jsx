import React, { useEffect, useState } from 'react';

// rrd
import { Link } from 'react-router-dom';

// icons
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

function themeFromLocalStorage() {
    return (
        JSON.parse(localStorage.getItem(`theme`)) || false
    );
}

function Navbar() {
    // hooks
    let [theme, setTheme] = useState(themeFromLocalStorage());

    useEffect(() => {
        localStorage.setItem(`theme`, JSON.stringify(theme));
        document.documentElement.setAttribute(`data-theme`, theme ? `dracula` : 'winter');
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
                            <p className="uppercase">Light</p>
                            <FaSun className='h-[20px] w-[20px]' />
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <p className="uppercase">Dark</p>
                            <IoMdMoon className='h-[20px] w-[20px]' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;