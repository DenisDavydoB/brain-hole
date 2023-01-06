import { useStore } from 'effector-react'
import { $openedCards, $staticCards } from './init.js'

export const useCards = () => useStore($staticCards)
export const useOpenedCards = () => useStore($openedCards)
