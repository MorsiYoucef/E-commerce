'use client'

import { Store } from '@prisma/client'
import { ComboboxDemo } from './ui/ComboBox'
import { PopoverTrigger } from './ui/popover'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useParams, useRouter } from 'next/navigation'
import { StethoscopeIcon } from 'lucide-react'
import { useState } from 'react'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitchProps extends PopoverTriggerProps {
  items: Store[]
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitchProps) => {
  const storeModal = useStoreModal()
  const params = useParams()
  const router = useRouter()

  const formatedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }))

  const currentStore = formatedItems.find(
    (item) => item.value === params.storeID
  )

  const [open, setOpen] = useState(false)

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false)
    router.push(`/${store.value}`)
  }

  return (
    <div>
      <ComboboxDemo />
    </div>
  )
}

export default StoreSwitcher
