import { HttpContext, HttpContextToken } from "@angular/common/http";

export const HAS_REQUEST_TOKEN = new HttpContextToken<boolean>(() => false);

export function includeRequestToken() {
  return new HttpContext().set(HAS_REQUEST_TOKEN, true);
};