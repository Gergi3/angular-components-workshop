import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { IUser } from '../shared/interfaces/index.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$$ = new BehaviorSubject<IUser | null>(null)

  user$ = this.user$$.asObservable()

  user: IUser | null = null;

  get isLoggedIn() { return !!this.user; }
  get username() { return this.user?.username || 'Guest' }
  get userId() { return this.user?._id || null }

  constructor(
    private http: HttpClient
  ) {
    this.user$.subscribe(user => this.user = user);
  }

  login(email: string, password: string) {
    return this.http.post<IUser>('/api/login', { email, password })
      .pipe(tap(user => this.user$$.next(user)));
  }

  register(email: string, username: string, password: string, rePassword: string, tel: string | undefined) {
    return this.http.post<IUser>('/api/register', { email, username, password, rePassword, tel })
      .pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.http.post('/api/logout', {})
      .pipe(tap(user => this.user$$.next(null)));
  }

  getProfile() {
    return this.http.get<IUser>('/api/users/profile')
      .pipe(
        tap(user => this.user$$.next(user)),
        catchError(err => {
          this.user$$.next(null);
          err.status = 404;

          return throwError(() => err);
        })
      )
  }
}