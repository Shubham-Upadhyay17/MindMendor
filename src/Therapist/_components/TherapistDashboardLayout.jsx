import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function TherapistDashboardLayout() {
  return (
    <div className='min-h-screen bg-white'>
      <Sidebar />
      <div>
        <Navbar />
        <div className='h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden px-2 md:p-6 ml-[100px] md:ml-[240px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default TherapistDashboardLayout
