import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../shared/interfaces/user.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { UsersService } from '../user/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | null = null;
  get isLoggedIn() { return !!this.currentUser; }

  constructor(
    private localStorage: LocalStorageService,
    private usersService: UsersService
  ) {
    this.initialize();
  }

  initialize() {
    let localStorageUser: IUser | null = JSON.parse(this.localStorage.get('user') || 'null');
    this.changeUser(localStorageUser);
  }

  login(email: string, password: string) {
    const loggedUser = this.usersService.getUserByEmailAndPassword(email, password);
    this.changeUser(loggedUser);
  }

  register(email: string, username: string, password: string, tel: string) {
    this.usersService.createUser(email, username, password, tel);
    this.login(email, password);
  }

  logout() {
    this.changeUser(null);
  }

  changeUser(user: IUser | null) {
    this.currentUser = user;
    this.localStorage.set('user', JSON.stringify(user));
  }
}