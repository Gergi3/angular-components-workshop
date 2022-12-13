import { IUser, ITheme } from "./index.model";

export interface IPost {
  likes: string[]
  _id: string
  text: string
  userId: IUser
  themeId: ITheme
  created_at: string,
  updatedAt: string
}