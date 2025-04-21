export type IDataProperty<Type> = {
    [Property in keyof Type as Exclude<Property, '__typename'>]: Type[Property]
}

export type IDataPropertyWithParam<Type, Param> = {
    [Property in keyof Type as Exclude<Property, '__typename'>]: Param
}
