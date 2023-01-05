import { createEvent } from 'effector'
import { createTimer } from './timer.js'

export const timerStart = createEvent()
export const timerStop = createEvent()
export const timerReset = createEvent()

export const $timer = createTimer('Main', timerStart, timerStop, timerReset)
