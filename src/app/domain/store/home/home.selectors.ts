import { RootState } from "@/app/domain/store";
import { createSelector } from "@ngrx/store";
import { HomeState } from "./home.state";


export const homeFeatureSelector = (state: RootState) => state.home;

export const selectIsLoadingKpis = createSelector(
  homeFeatureSelector,
  (state: HomeState) => state.loadingKpis
);

export const selectIsLoadingOrders = createSelector(
  homeFeatureSelector,
  (state: HomeState) => state.loadingOrders
);

export const selectIsLoadingProducts = createSelector(
  homeFeatureSelector,
  (state: HomeState) => state.loadingProducts
);

export const selectKpis = createSelector(
  homeFeatureSelector,
  (state: HomeState) => state.kpis
);

export const selectOrders = createSelector(
  homeFeatureSelector,
  (state: HomeState) => state.orders
);

export const selectProducts = createSelector(
  homeFeatureSelector,
  (state: HomeState) => state.products
);