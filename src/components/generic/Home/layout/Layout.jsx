import React from 'react'
import Navbar from '../generic/Navbar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
        
    
        <Navbar />
        <Outlet />
        
    </div>
  )
}

export default Layout