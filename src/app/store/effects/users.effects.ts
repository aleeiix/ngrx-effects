import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from './../actions/users.actions';
import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  constructor(private _actions$: Actions, private _userService: UserService) {}

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(usersActions.getUsers),
      tap((data) => console.log('effect tap ==> ', data)),
      mergeMap(() =>
        this._userService.getUsers().pipe(
          map((users) => usersActions.getUsersSuccess({ users })),
          catchError((err) => of(usersActions.getUsersError({ payload: err })))
        )
      )
    )
  );
}
