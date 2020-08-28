import { UserService } from '../../services/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userDetailActions from '../actions/user-detail.actions';
import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserDetailEffects {
  constructor(private _actions$: Actions, private _userService: UserService) {}

  getUserById$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userDetailActions.getUserById),
      mergeMap((action) =>
        this._userService.getUserById(action.id).pipe(
          map((user) => userDetailActions.getUserByIdSuccess({ user })),
          catchError((err) =>
            of(userDetailActions.getUserByIdError({ payload: err }))
          )
        )
      )
    )
  );
}
