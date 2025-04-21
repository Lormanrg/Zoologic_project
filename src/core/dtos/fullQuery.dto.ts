import { GenericPaginateDto } from './query.dto'

export class FullQueryDto<Q = null, F = null, I = null> extends GenericPaginateDto {
    filters?: F
    queries?: Q[]
    include?: I
}
