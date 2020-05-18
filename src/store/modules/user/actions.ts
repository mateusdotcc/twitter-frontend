import * as ActionTypes from './actionTypes';
import { User, UserUpdate, UserActionTypes } from './types';

export const addUser = (user: User): UserActionTypes => {
  return {
    type: ActionTypes.ADD_USER,
    user,
  };
};

export const addTweets = (tweet: string): UserActionTypes => ({
  type: ActionTypes.ADD_TWEET,
  tweet,
});

export const toggleLoading = (): UserActionTypes => ({
  type: ActionTypes.TOGGLE_LOADING,
  loading: true,
});

export const updateUser = (data: UserUpdate): UserActionTypes => ({
  type: ActionTypes.UPDATE_USER,
  data,
});
