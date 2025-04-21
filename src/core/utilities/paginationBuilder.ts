import { PaginateDto } from "../dtos/paginate.dto"

export function paginateBuilder(pagination: PaginateDto, options) {
    options.skip = pagination.skip == 1 || pagination.skip == 0 ? 0 : pagination.skip * pagination.limit - pagination.limit || 0
    options.take = pagination.limit || 5
    return options
}
