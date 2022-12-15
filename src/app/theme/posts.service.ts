import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../shared/interfaces/index.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.URLS.postsURL());
  }

  getAllLimited(limit: number): Observable<IPost[]> {
    if (limit < 0) limit = 5;

    return this.http.get<IPost[]>(environment.URLS.postsWithLimitURL(limit))
  }

  getAllByThemeId(themeId: string): Observable<IPost[]> {
    return this.getAll()
      .pipe(
        map(postArr => postArr.filter(post => post.themeId._id === themeId))
      );
  }
}
