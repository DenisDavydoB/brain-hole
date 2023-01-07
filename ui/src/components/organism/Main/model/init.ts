import { combine, createEffect, createEvent, createStore, forward, guard, sample } from 'effector'
import getCards from './helpers.js'
import type { CardItem } from './types.js'
import { createTimer } from '@/shared/effector/timer.js'
import { wait } from '@/shared/utils/wait.js'

const CARDS_GROUP_SIZE = 2
const TIMER_DEFAULT_DURATION = 3000
const SHOW_DEFAULT_DURATION = 750

const timerStart = createEvent()
const timerStop = createEvent()

export const openCard = createEvent<CardItem>()
export const applicationStart = createEvent()

const applicationStop = createEvent()
const applicationDone = createEvent()
const addToGuessed = createEvent<CardItem[]>()
const addToOpened = createEvent<CardItem>()
const openAll = createEvent()
const closeAll = createEvent()
const clearGuessed = createEvent()

export const $timer = createTimer('Main', timerStart, timerStop, applicationStart)

export const $cards = createStore<CardItem[]>(getCards())
export const $guessedCards = createStore<CardItem[]>([])
export const $openedCards = createStore<CardItem[]>([])
const $isWorking = createStore(false)
const $isDone = createStore(false)

export const $state = combine($isWorking, $isDone)
export const $stats = combine($timer)

const delayInitFx = createEffect().use(() => wait(TIMER_DEFAULT_DURATION))
const delayCloseFx = createEffect().use(() => wait(SHOW_DEFAULT_DURATION))

$guessedCards.reset(clearGuessed).on(addToGuessed, (state, payload) => {
  const firstCard = payload.at(0)
  const secondCard = payload.at(1)

  if (firstCard && secondCard && firstCard.cardId === secondCard.cardId) return [...state, firstCard, secondCard]
})

$isWorking.on(applicationStart, () => true).reset(applicationStop)
$isDone.on(applicationDone, () => true).reset(applicationStart)

$openedCards.reset(closeAll)
$openedCards.on(addToOpened, (state, payload) => {
  if (state.includes(payload)) return
  if (state.length >= CARDS_GROUP_SIZE) return

  return [...state, payload]
})

guard({
  source: $isWorking,
  filter: $isWorking,
  target: [openAll, delayInitFx],
})

guard({
  source: $openedCards,
  filter: (cards) => cards.length === CARDS_GROUP_SIZE,
  target: [delayCloseFx, addToGuessed],
})

guard({
  source: [$cards, $guessedCards],
  filter: ([cards, guessedCards]) => cards.length === guessedCards.length,
  target: applicationDone,
})

guard({
  source: delayCloseFx.done,
  filter: $isWorking,
  target: closeAll,
})

sample({ clock: openAll, source: $cards, target: $openedCards })
sample({ source: openCard, filter: $isWorking, target: addToOpened })

forward({ from: delayInitFx.done, to: [closeAll, timerStart] })
forward({ from: applicationDone, to: [openAll, clearGuessed, timerStop, applicationStop] })
