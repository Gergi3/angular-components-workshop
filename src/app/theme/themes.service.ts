import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from '../shared/interfaces/index.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(environment.URLS.themesURL());
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
    return this.http.get<ITheme>(environment.URLS.themesIdURL(id));
  }

  create(themeName: string) {
    return this.http.post<ITheme>(environment.URLS.themesURL(), { themeName });
  }
}
