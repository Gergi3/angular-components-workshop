import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/index.model';
import UsersJson from './users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private nextId = 1;

  users: IUser[] = UsersJson;

  create(email: string, username: string, password: string, tel: string) {
    const currentTime = new Date().toLocaleString();
    const user = {
      _id: this.getNextId(),
      email, username, password, tel,
      themes: [],
      posts: [],
      created_at: currentTime,
      updatedAt: currentTime,
    };
    this.users.push(user);
  }

  getByEmailAndPassword(email: string, password: string) {
    return this.users.find(x => x.email === email && x.password === password) || null;
  }

  getById(id: string) {
    return this.users.find(x => x._id === id);
  }

  putById(userId: string, userInfo: { email?: string, username?: string, password?: string, tel?: string }) {
    let user = this.users.find(x => x._id === userId);
    Object.entries(userInfo).forEach(([k, v]) => {
      if (user && k && v) {
        user[k] = v;
      }
    })
  }

  private getNextId(): string {
    return (this.nextId++).toString();
  }
}
