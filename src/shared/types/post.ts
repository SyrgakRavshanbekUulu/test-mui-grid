import { IError } from "./error";

export type IPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type AddPost = Omit<IPost, 'id'>;

export interface PostInitialState {
  posts: IPost[],
  loading: boolean,
  error?: IError,
  currentPost?: IPost
}