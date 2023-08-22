import { isJson } from "./data";

export function getItem(key, defaultValue = null) {
  try {
    const LsData = localStorage.getItem(key);
    if (LsData === null) return defaultValue;
    return isJson(LsData) ? JSON.parse(LsData) : LsData;
  } catch (error) {
    return defaultValue;
  }
}

export function setItem(key, value) {
  let data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

export function deleteItem(key) {
  localStorage.removeItem(key);
}

export function deleteAll() {
  localStorage.clear();
}
