// react
import React, { Fragment } from 'react'

// rrd
import { Outlet } from 'react-router-dom'

// components
import { Navbar } from '../components'

function MainLayout() {
    return (
        <div className='pt-[10px]'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout