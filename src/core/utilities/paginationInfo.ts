import { PaginateDto } from '../dtos/paginate.dto';
import { PaginateResult } from '../interfaces/baseResponse';
import { paginateBuilder } from './paginationBuilder';

export const obtainPaginationInfo = async <T>(
  filterOpts: PaginateDto,
  docs: T[],
  count: number,
): Promise<PaginateResult<T>> => {
  const { skip: originalSkip } = filterOpts;
  const { limit, skip } = paginateBuilder(filterOpts, filterOpts);

  const page = Number(originalSkip) || 1;
  const quantityPages = Math.ceil(count / limit);

  return {
    totalDocs: docs.length,
    totalPages: quantityPages,
    count: docs.length,
    page: originalSkip,
    skip: originalSkip,
    hasPrevPage: page > 1,
    prevPage: page - 1,
    nextPage: page === quantityPages ? null : page + 1,
    hasNextPage: page < quantityPages,
    limit,
    offset: skip,
    perPage: limit,
    pagingCounter: quantityPages,
  };
};

export const getPaginationSkip = (filter: PaginateDto): { skip: number } => {
  const skip = filter.limit > 0 ? filter.limit * (filter.skip - 1) : 0;

  return {
    skip,
  };
};
