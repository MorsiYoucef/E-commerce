// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import '../globals.css'
export default function SetupPage() {
  return (
    <div className=" p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
