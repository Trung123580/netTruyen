'use client'
import {Button} from '@nextui-org/button'

export default function Home() {
  return (
    <div>
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
