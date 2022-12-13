import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requestsUrls } from '../shared/constants';
import { IPost } from '../shared/interfaces/index.model';
import { map, Observable } from 'rxjs';

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
    if (limit < 0) limit = 5;

    return this.http.get<IPost[]>(requestsUrls.postsWithLimit(limit))
  }

  getAllByThemeId(themeId: string): Observable<IPost[]> {
    return this.getAll()
      .pipe(
        map(postArr => postArr.filter(post => post.themeId._id === themeId))
      );
  }
}
