// react
import React, { useState } from 'react'

// rrd
import { Link } from 'react-router-dom'

// icons
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

function Navbar() {
    let [theme, setTheme] = useState(false);

    return (
        <div className="main-container navbar bg-transparent">
            <div className="navbar-start">
                <Link to={`/`} className="text-2xl font-bold text-[26px] -tracking-[1px]">
                    devfinder
                </Link>
            </div>

            <div className="navbar-end" onClick={() => setTheme(!theme)}>
                <div >
                    <label htmlFor='themeCont' className='swap'>
                        {theme ? 'Ligth' : `Dark`}
                    </label>
                </div>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input id='themeCont' onClick={() => setTheme(!theme)} type="checkbox" />

                    {/* sun icon */}
                    <div className='swap-on fill-current  flex'>
                        <FaSun className='h-[20px] w-[20px]' />
                    </div>

                    {/* moon icon */}
                    <div className='swap-off fill-current flex'>
                        <IoMdMoon className='h-[20px] w-[20px]' />
                    </div>

                </label>
            </div>
        </div>
    )
}

export default Navbar