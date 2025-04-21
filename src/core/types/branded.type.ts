import { Types } from 'mongoose'

declare const __brand: unique symbol

type Brand<B> = {
    [__brand]: B
}

export type Branded<T, B> = T & Brand<B>

export type UUID = Branded<Types.UUID, 'UUID'>
