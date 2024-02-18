import { createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";
import { RootState } from "..";

export const getAuthFeatureSelector = (state: RootState) => state.auth;


export const selectIsLoadingLogin = createSelector(
  getAuthFeatureSelector,
  (state: AuthState) => state.isLoading
)

export const selectHasErrorLogin = createSelector(
  getAuthFeatureSelector,
  (state: AuthState) => state.hasError
)