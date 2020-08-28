import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const getUserById = createAction(
  '[USER DETAIL] Get User By Id',
  props<{ id: string }>()
);

export const getUserByIdSuccess = createAction(
  '[USER DETAIL] Get User By Id Success',
  props<{ user: User }>()
);

export const getUserByIdError = createAction(
  '[USER DETAIL] Get User By Id Error',
  props<{ payload: any }>()
);
