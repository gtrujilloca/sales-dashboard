import { createReducer, on } from "@ngrx/store";

import { HomeState } from "@/app/domain/store/home/home.state";
import { HomeActions } from "@/app/domain/store";

const initialHomeState: HomeState = {
  kpis: null,
  loadingKpis: true,
  orders: null,
  loadingOrders: true,
  products: null,
  loadingProducts: true
};

const homeReducerInternal = createReducer(
  initialHomeState,
  on(HomeActions.successKpisAction, (state, { kpis }) => {
    return {
      ...state,
      loadingKpis: false,
      kpis,
    };
  }),
  on(HomeActions.successOrdersAction, (state, { orders }) => {
    return {
      ...state,
      loadingOrders: false,
      orders,
    };
  }),
  on(HomeActions.successProductsAction, (state, { products }) => {
    return {
      ...state,
      loadingKpis: false,
      products,
    };
  })
);

export function homeReducer(state: HomeState, action: any){
  return homeReducerInternal(state, action);
}