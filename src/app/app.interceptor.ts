import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_ERROR_TOKEN } from './shared/constants';
import { Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';

const apiURL = environment.URLS.apiURL();
const apiEndpoint = '/api';


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(API_ERROR_TOKEN) private apiError$$: BehaviorSubject<Error | null>
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(apiEndpoint)) {
      request = request.clone({
        url: request.url.replace('/api', apiURL),
        withCredentials: true
      });
    }
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (request.url.endsWith('/profile') && request.method === 'GET') {
            if (err.status !== 401) {
              this.apiError$$.next(err)
            }
            return throwError(() => err);
          }

          if (err.status === 401) {
            this.apiError$$.next(new Error('You do not have permission to access this page'));
            this.router.navigate(['/login'])
          } else {
            this.apiError$$.next(err)
          }
          return throwError(() => err);
        })
      );
  }
}

export const appInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}