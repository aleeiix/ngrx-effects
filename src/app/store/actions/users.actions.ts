import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const getUsers = createAction('[USERS] Get Users');

export const getUsersSuccess = createAction(
  '[USERS] Get Users Success',
  props<{ users: User[] }>()
);

export const getUsersError = createAction(
  '[USERS] Get Users Error',
  props<{ payload: any }>()
);
