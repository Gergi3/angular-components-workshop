import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/index.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { UsersService } from '../user/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | null = null;
  get isLoggedIn() { return !!this.currentUser; }
  get username() { return this.currentUser?.username || 'Guest'}
  get userId() { return this.currentUser?._id || null}

  constructor(
    private localStorage: LocalStorageService,
    private usersService: UsersService
  ) {
    this.initialize();
  }

  initialize() {
    let localStorageUser: IUser | null = this.localStorage.getParsed('user');
    this.changeUser(localStorageUser);
  }

  login(email: string, password: string) {
    const loggedUser = this.usersService.getByEmailAndPassword(email, password);
    this.changeUser(loggedUser);
  }

  register(email: string, username: string, password: string, tel: string) {
    this.usersService.create(email, username, password, tel);
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