'use client'

import { UserButton } from '@clerk/nextjs'
import '../globals.css'
import { Modal } from '@/components/ui/modal'
export default function SetupPage() {
  return (
    <div className=" p-4">
      <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  )
}
