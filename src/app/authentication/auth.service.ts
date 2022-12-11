import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;
  
  // users: IUser[] = [{
  //   _id: '1',
  //   email: 'asd@asd.asd',
  //   username: 'Pesho',
  //   password: '123',
  //   tel: '089773123',
  //   themes: [],
  //   posts: [],
  //   created_at: 'today',
  //   updatedAt: 'today',
  // }];

  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  // register(user: { _id: string, email: string, username: string, password: string, tel: string }) {
  //   let currentTime = new Date().toLocaleString();
  //   this.users.push({
  //     ...user,
  //     themes: [],
  //     posts: [],
  //     created_at: currentTime,
  //     updatedAt: currentTime,
  //   })
  // }

  logout() {
    this.isLoggedIn = false;
  }
}