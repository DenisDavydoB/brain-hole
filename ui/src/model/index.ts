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
const timerStart = createEvent()

const application = createApplicationState(getCardsFx)
const { $cards, $guessedCards, $openedCards, openCard, applicationStart, loading, error, working, done, idle } =
  application

const $timer = createTimer({ name: 'Main', start: timerStart, stop: timerStop, reset: applicationStart })

guard({
  source: working,
  filter: working,
  target: timerStart,
})

guard({
  source: done,
  filter: done,
  target: timerStop,
})

const $stats = combine({ $timer, $guessedCards }).map((state) => ({
  timer: state.$timer,
  guessedNumber: state.$guessedCards.length,
}))

const $appState = combine({ working, done, idle })

export { $cards, $guessedCards, $openedCards, $stats, openCard, applicationStart, loading, error, $appState }
