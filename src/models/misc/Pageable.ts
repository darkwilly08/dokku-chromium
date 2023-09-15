export interface Pageable {
  limit: number;
  offset: number;
  sort?: string;
  direction?: string;
}
