import { useStore } from 'effector-react'
import { $cards, $guessedCards, $openedCards, $state, $stats, $timer } from './init.js'

export const useCards = () => useStore($cards)
export const useOpenedCards = () => useStore($openedCards)
export const useGuessedCards = () => useStore($guessedCards)
export const useTimer = () => useStore($timer)
export const useApplicationState = () => useStore($state)
export const useStats = () => useStore($stats)
