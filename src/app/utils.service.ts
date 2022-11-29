import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  parseRequestUrl(baseUrl: string, endpoint?: string): string {
    if (!endpoint) return baseUrl;

    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }

    return `${baseUrl}/${endpoint}`;
  }
}
