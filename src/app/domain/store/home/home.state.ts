import { IKpi, IOrder, IProduct } from '@/app/core/models';

export interface HomeState {
  kpis: IKpi[] | null;
  loadingKpis: boolean | null;
  orders: IOrder[] | null;
  loadingOrders: boolean | null;
  products: IProduct[] | null;
  loadingProducts: boolean | null;
}