'use client'
import {Button} from '@nextui-org/button'
import {SwModeTheme} from '@/components/SwModeTheme'

export default function App() {
  return (
    <div>
      <SwModeTheme/>
      <Button color="danger" aria-label="Like">
        Button
      </Button>
      <Button
        // disableRipple
        className="relative px-12 shadow-xl"
        size="md"
      >
        Press me
      </Button>

    </div>
  )
}
