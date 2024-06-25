import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { MainNav } from './main-nav'
import { ComboboxDemo } from './ui/ComboBox'
import StoreSwitcher from './StoreSwitcher'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import prismadb from '@/lib/prismadb'

const Navbar = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }
  const stores = await prismadb.store.findMany({
    where: { userId },
  })

  return (
    <div className=" border-b">
      <div className=" flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className=" mx-6" />
        <div className=" ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
