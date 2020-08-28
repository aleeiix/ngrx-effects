import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import {
  getUserById,
  getUserByIdSuccess,
  getUserByIdError,
} from '../actions/user-detail.actions';

export interface UserDetailState {
  user: User;
  id: string;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userDetailInitialState: UserDetailState = {
  user: null,
  id: null,
  loaded: false,
  loading: false,
  error: null,
};

const _userDetailReducer = createReducer(
  userDetailInitialState,
  on(getUserById, (state: UserDetailState, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(getUserByIdSuccess, (state: UserDetailState, { user }) => ({
    ...state,
    loaded: true,
    loading: false,
    user: { ...user },
  })),
  on(getUserByIdError, (state: UserDetailState, { payload }) => ({
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

export function userDetailReducer(state, action) {
  return _userDetailReducer(state, action);
}
