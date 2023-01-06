import { $openedCards, openCard } from './init.js'

$openedCards.on(openCard, (state, payload) => {
  if (state.length < 2) return [...state, payload]
  return []
})
