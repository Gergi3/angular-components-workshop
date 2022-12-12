import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public nextId = 1;

  isLoggedIn: boolean = false;
  currentUser: IUser | null = null;
  currentUserChange = new Subject<IUser | null>();

  users: IUser[] = [
    {
      _id: this.getNextId(),
      email: 'asd@asd.asd',
      username: 'Pesho',
      password: '123',
      tel: '089773123',
      themes: [],
      posts: [],
      created_at: 'today',
      updatedAt: 'today',
    }
  ];

  constructor(
    private localStorage: LocalStorageService
  ) {
    this.initialize();
  }

  initialize() {
    this.currentUserChange.subscribe({
      next: (value) => {
        this.currentUser = value;
        this.localStorage.set('user', JSON.stringify(value));
        this.isLoggedIn = !!this.currentUser;
      }
    });
    
    let localStorageUser: IUser | null = JSON.parse(this.localStorage.get('user') || 'null');
    this.changeUser(localStorageUser);
  }

  login(loginInfo: { email: string, password: string }) {
    const loggedUser = this.users
      .find(x => x.email == loginInfo.email && x.password == loginInfo.password) || null;

    this.changeUser(loggedUser);
  }

  register(registerInfo: { email: string, username: string, password: string, tel: string }) {
    const currentTime = new Date().toLocaleString();
    const newUser = {
      _id: this.getNextId(),
      ...registerInfo,
      themes: [],
      posts: [],
      created_at: currentTime,
      updatedAt: currentTime,
    };
    this.users.push(newUser);

    this.login({ email: newUser.email, password: newUser.password });
  }

  logout() {
    this.changeUser(null);
  }

  private getNextId(): string {
    return (this.nextId++).toString();
  }

  changeUser(newUser: IUser | null) {
    this.currentUserChange.next(newUser);
    this.currentUserChange.complete();
  }
}