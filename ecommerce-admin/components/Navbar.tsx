import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { MainNav } from './main-nav'
import { ComboboxDemo } from './ui/ComboBox'

const Navbar = () => {
  return (
    <div className=" border-b">
      <div className=" flex h-16 items-center px-4">
        <ComboboxDemo />
        <MainNav className=" mx-6" />
        <div className=" ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
