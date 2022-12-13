import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requestsUrls } from '../shared/constants';
import { ITheme } from '../shared/interfaces/index.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(requestsUrls.themes);
  }

  getAllSortedBySubscription(sort: 'desc' | 'asc' = 'desc'): Observable<ITheme[]> {
    return this.getAll()
      .pipe(
        map(x => x.sort((a, b) => {
          const aValue = a.subscribers.length;
          const bValue = b.subscribers.length
          const isDescending = sort == 'desc';

          if (aValue > bValue)
            return isDescending ? -1 : 1
          if (aValue < bValue)
            return isDescending ? 1 : -1
          return 0;
        }))
      );
  }

  getById(id: string) {
    return this.http.get<ITheme>(requestsUrls.themesId(id));
  }

  createTheme(themeName: string) {
    return this.http.post<ITheme>(requestsUrls.themes, { themeName });
  }
}
