import { createEffect, createEvent, createStore, Effect, forward, guard, restore, sample } from 'effector'
import { wait } from '@/shared/utils/wait.js'

const CARDS_GROUP_SIZE = 2
const TIMER_DEFAULT_DURATION = 3000
const SHOW_DEFAULT_DURATION = 750

export default function createApplicationState<T extends { id: string; cardId: string }>(
  fetchCardsFx: Effect<void, T[]>
) {
  const openCard = createEvent<T>()
  const applicationStart = createEvent()
  const applicationDone = createEvent()
  const openAll = createEvent()
  const closeAll = createEvent()
  const reset = createEvent()
  const addToGuessed = createEvent<T[]>()
  const clearGuessed = createEvent()
  const addToOpened = createEvent<T>()
  const setIsWorking = createEvent()

  const delayInitFx = createEffect().use(() => wait(TIMER_DEFAULT_DURATION))
  const delayCloseFx = createEffect().use(() => wait(SHOW_DEFAULT_DURATION))

  const $cards = restore<T[]>(fetchCardsFx, [])
  const $guessedCards = createStore<T[]>([])
  const $openedCards = createStore<T[]>([])
  const $isWorking = createStore(false)
  const $isDone = createStore(false)

  $isWorking.on(setIsWorking, () => true).reset(applicationDone)
  $isDone.on(applicationDone, () => true).reset(reset)

  $guessedCards.reset(clearGuessed)
  $guessedCards.on(addToGuessed, (state, payload) => {
    const firstCard = payload.at(0)
    const secondCard = payload.at(1)

    if (firstCard && secondCard && firstCard.cardId === secondCard.cardId) return [...state, firstCard, secondCard]
  })

  $openedCards.reset(closeAll)
  $openedCards.on(addToOpened, (state, payload) => {
    if (state.includes(payload)) return
    if (state.length >= CARDS_GROUP_SIZE) return

    return [...state, payload]
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

  forward({ from: applicationStart, to: [fetchCardsFx, reset] })
  forward({ from: fetchCardsFx.done, to: [setIsWorking, openAll, delayInitFx] })
  forward({ from: delayInitFx.done, to: [closeAll] })
  forward({ from: applicationDone, to: [openAll, clearGuessed] })

  sample({ clock: openAll, source: $cards, target: $openedCards })
  sample({ source: openCard, filter: $isWorking, target: addToOpened })

  return {
    $cards,
    $guessedCards,
    $openedCards,
    openCard,
    applicationStart,
    loading: fetchCardsFx.pending,
    error: fetchCardsFx.fail,
    working: $isWorking,
    done: $isDone,
  }
}
