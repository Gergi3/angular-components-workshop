import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(key: string, value: string | object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string) {
    return localStorage.getItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
