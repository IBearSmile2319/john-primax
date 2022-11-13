export interface IInitialUserState {
  user: IUser | {};
  token: string;
  loading: boolean;
  error: string;
  loggedIn: boolean;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  token: string;
}
