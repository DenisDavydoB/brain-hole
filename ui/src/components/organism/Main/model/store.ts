import { createEvent, createStore } from 'effector'
import getCards from './helpers.js'
import type { CardItem } from './types.js'

export const $staticCards = createStore<CardItem[]>(getCards())
export const $guessedCards = createStore<CardItem[]>([])
export const $openedCards = createStore<CardItem[]>([])

export const openCard = createEvent<CardItem>()
export const openAll = createEvent()

$openedCards.on(openCard, (state, payload) => {
  if (state.length < 2) return [...state, payload]
  return []
})
