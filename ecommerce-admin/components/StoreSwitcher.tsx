'use client'

import { Store } from '@prisma/client'
import { ComboboxDemo } from './ui/ComboBox'
import { PopoverTrigger } from './ui/popover'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitchProps extends PopoverTriggerProps {
  items: Store[]
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitchProps) => {
  return (
    <div>
      <ComboboxDemo />
    </div>
  )
}

export default StoreSwitcher
