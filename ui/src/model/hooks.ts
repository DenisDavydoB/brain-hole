import { useStore } from 'effector-react'
import { $appState, $cards, $guessedCards, $openedCards, $stats } from './index.js'

export const useCards = () => useStore($cards)
export const useOpenedCards = () => useStore($openedCards)
export const useGuessedCards = () => useStore($guessedCards)
export const useStats = () => useStore($stats)
export const useApplicationState = () => useStore($appState)
