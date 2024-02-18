import { createAction, props } from '@ngrx/store';

import { IKpi, IOrder, IProduct } from '@/app/core/models';

export const getKpisAction = createAction('[Home] GetKpisAction');
export const getProductsAction = createAction('[Home] GetProductsAction');
export const getOrdersAction = createAction('[Home] GetOrdersAction');

export const successKpisAction = createAction('[Home] SuccessKpisAction', props<{ kpis: IKpi[] }>());
export const successOrdersAction = createAction('[Home] SuccessOrdersAction', props<{ orders: IOrder[] }>());
export const successProductsAction = createAction('[Home] SuccessProductsAction', props<{ products: IProduct[] }>());