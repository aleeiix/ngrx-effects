import {
  getUsers,
  getUsersSuccess,
  getUsersError,
} from './../actions/users.actions';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export interface UserState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UserState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,
  on(getUsers, (state: UserState) => ({
    ...state,
    loading: true,
  })),
  on(getUsersSuccess, (state: UserState, { users }) => ({
    ...state,
    loaded: true,
    loading: false,
    users: [...users],
  })),
  on(getUsersError, (state: UserState, { payload }) => ({
    ...state,
    loaded: true,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
