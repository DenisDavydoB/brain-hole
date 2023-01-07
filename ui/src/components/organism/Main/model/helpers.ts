import { v4 as uuid } from 'uuid'
import type { CardItem } from './types.js'

const CARD_PAIRS_NUMBER = 8
export default function getCards(): CardItem[] {
  const cards: CardItem[] = []

  for (let index = 0; index < CARD_PAIRS_NUMBER; index++) {
    addCardPair(cards, `./items/donut_${index + 1}.png`)
  }

  return cards.sort(shuffle)
}

const addCardPair = (cards: CardItem[], url: string) => {
  const cardId = uuid()
  cards.push({ id: uuid(), cardId, url })
  cards.push({ id: uuid(), cardId, url })

  return cards
}

const shuffle = () => {
  return Math.random() - 0.5
}
