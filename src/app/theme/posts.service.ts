import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requestsUrls } from '../constants';
import { IPost } from '../shared/interfaces/post.model';
import { filter, from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(requestsUrls.posts);
  }

  getAllLimited(limit: number): Observable<IPost[]> {
    if (limit < 0) {
      limit = 5;
    }

    return this.http.get<IPost[]>(requestsUrls.posts + `?limit=${limit}`)
  }

  getAllByThemeId(themeId: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(requestsUrls.posts)
      .pipe(
        map(postArr => postArr.filter(post => post.themeId._id === themeId))
      )
  }
}
