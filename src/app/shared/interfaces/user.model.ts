import { IIndexable } from './indexable.model';
export interface IUser extends IIndexable {
  _id: string
  email: string
  username: string
  password: string
  tel: string
  themes: string[]
  posts: string[]
  created_at: string
  updatedAt: string
}
