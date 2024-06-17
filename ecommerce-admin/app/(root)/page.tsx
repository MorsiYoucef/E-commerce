'use client'

import { UserButton } from '@clerk/nextjs'
import '../globals.css'
import { Modal } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
export default function SetupPage() {
  return (
    <div className=" p-4">
      <Button>Click Me</Button>
      <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  )
}
