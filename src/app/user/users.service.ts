import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import UsersJson from './users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public nextId = 1;

  users: IUser[] = UsersJson;
  
  createUser(email: string, username: string, password: string, tel: string) {
    const currentTime = new Date().toLocaleString();
    const user = {
      _id: this.getNextId(),
      email, username, password, tel,
      themes: [],
      posts: [],
      created_at: currentTime,
      updatedAt: currentTime,
    };
    this.addUser(user);
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find(x => x.email === email && x.password === password) || null;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }

  getNextId(): string {
    return (this.nextId++).toString();
  }
}
