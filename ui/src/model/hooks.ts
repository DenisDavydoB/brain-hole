import { useStore } from 'effector-react'
import { $cards, $guessedCards, $openedCards, $state, $stats } from './index.js'

export const useCards = () => useStore($cards)
export const useOpenedCards = () => useStore($openedCards)
export const useGuessedCards = () => useStore($guessedCards)
export const useStats = () => useStore($stats)
export const useApplicationState = () => useStore($state)
