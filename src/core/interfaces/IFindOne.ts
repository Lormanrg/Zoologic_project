export type IFindOne<Type> = {
    [Property in keyof Partial<Type>]: string | number | boolean
}
