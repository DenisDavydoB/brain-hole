import { useStore } from 'effector-react'
import { $openedCards, $staticCards } from './store.js'

export const useCards = () => useStore($staticCards)
export const useOpenedCards = () => useStore($openedCards)
