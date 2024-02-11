import { LocalStorageKeys } from "../models/localstorage"

export function getLocalstorageItem(key: LocalStorageKeys) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
}

export function setLocalstorageItem(key: LocalStorageKeys, value: any) {
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    console.error(error);
  }
}