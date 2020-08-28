import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  users: reducers.UserState;
  userDetail: reducers.UserDetailState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  userDetail: reducers.userDetailReducer,
};
