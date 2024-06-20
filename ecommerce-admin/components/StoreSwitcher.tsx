import { ComboboxDemo } from './ui/ComboBox'
import { PopoverTrigger } from './ui/popover'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitchProps extends PopoverTriggerProps {}

const StoreSwitcher = () => {
  return (
    <div>
      <ComboboxDemo />
    </div>
  )
}

export default StoreSwitcher
