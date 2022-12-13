import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public get(key: string) {
    return localStorage.getItem(key);
  }

  public getParsed(key: string): any | null {
    return JSON.parse(this.get(key) || 'null');
  }

  public clear() {
    localStorage.clear();
  }
}
