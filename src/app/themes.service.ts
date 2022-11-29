import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { requestsUrls } from './constants';
import { ITheme } from './interfaces/ITheme';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  getAll(): Observable<ITheme[]> {
    let url = this.utils.parseRequestUrl(requestsUrls.themes);
    return this.http.get<ITheme[]>(url);
  }

  getAllSortedBySubscription(sort: 'desc' | 'asc' = 'desc'): Observable<ITheme[]> {
    return this.getAll()
      .pipe(
        map(x => x.sort((a, b) => {
          let aValue = a.subscribers.length;
          let bValue = b.subscribers.length
          if (aValue > bValue)
            return sort == 'desc' ? -1 : 1
          if (aValue < bValue)
            return sort == 'desc' ? 1 : -1
          return 0;
        }))
    );
  }
}
