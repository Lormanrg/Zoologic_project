export interface IGetAllArgs<W = unknown, C = unknown, O = unknown, I = unknown> {
    where?: W
    take?: number
    skip?: number
    cursor?: C
    orderBy?: O
    include?: I
    page?: number
}
