import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
