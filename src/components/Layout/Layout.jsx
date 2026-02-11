import React from 'react'
import Header from '../Header/Header'
import {Outlet} from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar'

function Layout() {
  return (
   <div className="app">
    <Sidebar />

  <div className="main">
    <Header />
    <Outlet />
  </div>
</div>

  )
}

export default Layout