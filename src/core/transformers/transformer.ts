export abstract class Transformer<DAO, DTO, C, U, I = null> {
    abstract unwrap(param: DAO): DTO
    abstract wrapCreate(entity: DTO, include?: I): C
    abstract wrapUpdate(entity: Partial<DTO>, include?: I): U
}
