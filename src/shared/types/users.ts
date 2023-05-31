import { IError } from "./error";

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  photo: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export interface UsersInitialState {
  users: IUser[],
  loading: boolean,
  error?: IError,
  currentUser?: IUser
}

export type IPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};