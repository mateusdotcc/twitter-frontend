import * as ActionTypes from './actionTypes';

export interface User {
  _id?: string;
  id?: string;
  avatar?: string;
  bio?: string;
  company?: string;
  cover?: string;
  followers?: number;
  following?: number;
  html_url?: string;
  name?: string;
  tweets?: string[];
  user?: string;
  blog?: string;
  email?: string;
}

export interface Data {
  user: User;
  loading: boolean;
}

export interface AddUserAction {
  type: typeof ActionTypes.ADD_USER;
  user: User;
}

export interface AddTweetAction {
  type: typeof ActionTypes.ADD_TWEET;
  tweet: string;
}

export interface ToggleLoading {
  type: typeof ActionTypes.TOGGLE_LOADING;
  loading: boolean;
}

export interface UserUpdate {
  name?: string;
  avatar?: string;
  cover?: string;
}

export interface UpdateUserAction {
  type: typeof ActionTypes.UPDATE_USER;
  data: UserUpdate;
}

export interface UserState {
  readonly user?: User;
  readonly data?: Data;
  readonly tweets?: string[];
  readonly loading?: boolean;
  readonly name?: string;
}

export type UserActionTypes =
  | AddUserAction
  | UpdateUserAction
  | AddTweetAction
  | ToggleLoading;
