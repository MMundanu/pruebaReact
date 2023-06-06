import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../element/Header'

export const ProjectLayouts = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
  )
}
