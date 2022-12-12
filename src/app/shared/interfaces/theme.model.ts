import { IUser } from "./user.model"

export interface ITheme {
  subscribers: string[]
  posts: string[]
  _id: string
  themeName: string
  userId: IUser
  created_at: string
  updatedAt: string
}