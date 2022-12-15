import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/index.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | null = null;
  get isLoggedIn() { return !!this.currentUser; }
  get username() { return this.currentUser?.username || 'Guest'}
  get userId() { return this.currentUser?._id || null}

  constructor(
    private http: HttpClient
  ) { }


  login(email: string, password: string) {
  }

  register(email: string, username: string, password: string, rePassword: string, tel: string | undefined) {
    this.http.post('/api/login', { email, username, password, rePassword, tel});
  }

  logout() {
  }
}