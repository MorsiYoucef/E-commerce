'use client'

import { Store } from '@prisma/client'
import { ComboboxDemo } from './ui/ComboBox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useParams, useRouter } from 'next/navigation'
import {
  StethoscopeIcon,
  Store as IconStore,
  ChevronsUpDown,
  StoreIcon,
  Check,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import { Input } from 'postcss'

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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a Store"
          className={cn(' w-[200px] justify-between', className)}
        >
          <IconStore className=" mr-2 h-4 w-4" />
          Current Store
          <ChevronsUpDown className=" ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Store..."></CommandInput>
            <CommandEmpty>No Store Found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formatedItems.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                >
                  <StoreIcon className=" mr-2 h-4 w-4" />
                  {store.label}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      currentStore?.value === store.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default StoreSwitcher
