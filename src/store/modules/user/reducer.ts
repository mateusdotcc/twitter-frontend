import { UserState, UserActionTypes } from './types';
import * as ActionTypes from './actionTypes';

const INITIAL_STATE: UserState = {
  loading: false,
};

export const data = (
  state = INITIAL_STATE,
  action: UserActionTypes,
): UserState => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return { ...state, user: action.user };
    case ActionTypes.UPDATE_USER:
      return {
        loading: false,
        user: {
          ...state.user,
          name: action.data.name,
        },
      };
    case ActionTypes.ADD_TWEET:
      return {
        loading: false,
        user: {
          ...state.user,
          tweets: [...state.user?.tweets, action.tweet],
        },
      };
    case ActionTypes.TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default data;
