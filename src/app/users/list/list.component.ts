import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as usersActions from './../../store/actions/users.actions';

import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  constructor(private _store: Store<AppState>) {}

  faSync = faSync;
  users: User[] = [];
  loading: boolean = false;
  error: any = null;

  ngOnInit(): void {
    this.listenUsers();
    this.getUsers();
  }

  listenUsers() {
    this._store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
  }

  getUsers() {
    this._store.dispatch(usersActions.getUsers());
  }
}
