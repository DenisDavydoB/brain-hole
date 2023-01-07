import { combine, createEffect, createEvent, guard } from 'effector'
import getCards from '../shared/utils/helpers.js'
import createApplicationState from '@/shared/effector/application.js'
import { createTimer } from '@/shared/effector/timer.js'
import { wait } from '@/shared/utils/wait.js'

const getCardsFx = createEffect(async () => {
  await wait(1000)
  return getCards()
})

const timerStop = createEvent()

const { $cards, $guessedCards, $openedCards, openCard, applicationStart, loading, error, working, done } =
  createApplicationState(getCardsFx)

guard({
  source: done,
  filter: done,
  target: timerStop,
})

const $timer = createTimer({ name: 'Main', start: applicationStart, stop: timerStop, reset: applicationStart })

const $stats = combine({ $timer, $guessedCards }).map((state) => ({
  timer: state.$timer,
  guessedNumber: state.$guessedCards.length,
}))

const $state = combine([working, done])

export { $cards, $guessedCards, $openedCards, $stats, openCard, applicationStart, loading, error, $state }
