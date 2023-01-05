import { v4 as uuid } from 'uuid'
import type { CardItem } from './types.js'

export const cards: CardItem[] = []

export default function getCards(): CardItem[] {
  while (cards.length < 18) {
    addCard(cards, `./items/donut_${cards.length + 1}.png`)
  }

  const result = [...cards]

  return result.sort(shuffle)
}

const addCard = (cards: CardItem[], url: string) => {
  cards.push({ id: uuid(), url })

  return cards
}

const shuffle = () => {
  return Math.random() - 0.5
}

export function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
