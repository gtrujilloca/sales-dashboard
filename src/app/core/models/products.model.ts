
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface DataKPI {
  id: number;
  attributes: Omit<IKpi, 'id'>;
}

export interface KpiApiResponse {
  data: DataKPI[];
  meta: Meta;
}

export interface IKpi {
  id: number;
  title: string;
  value: number;
  percentage: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IOrder {
  id: number;
  date: string;
  customer: string;
  status: string;
  total: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IProduct {
  id: number;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}