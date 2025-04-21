export interface JwtPayload {
    email: string
    id: number
}

export interface JwtPayloadGroup extends JwtPayload {
    groupId: number
}
