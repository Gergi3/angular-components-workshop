import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { requestsUrls } from './constants';
import { ITheme } from './interfaces/ITheme';
import { Observable } from 'rxjs';

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
}
