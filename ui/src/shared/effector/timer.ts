import { createEffect, createEvent, createStore, forward, guard } from 'effector'
import type { Event } from 'effector'
import { wait } from '@/shared/utils/wait.js'

const DEFAULT_TIMER_RESOLUTION = 1000

type TimerProps = {
  name: string
  start: Event<void>
  stop: Event<void>
  reset: Event<void>
  resolution?: number
}

export function createTimer(props: TimerProps) {
  const { name, start, stop, reset, resolution = DEFAULT_TIMER_RESOLUTION } = props

  const $working = createStore<boolean>(false, { name: `${name} Working` })
  const $timer = createStore<number>(0, { name: `${name} Timer` })

  const tick = createEvent(`${name}Tick`)
  const timerFx = createEffect(`${name} Waiting`).use(() => wait(resolution))

  $working.on(start, () => true)
  $working.on(stop, () => false)

  $timer.on(tick, (state) => state + resolution)
  $timer.reset(reset)

  guard({ source: timerFx.done, filter: $working, target: tick })
  guard({ source: $timer, filter: $working, target: timerFx })
  forward({ from: $working, to: timerFx })

  return $timer
}
