import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions';
import { User } from 'src/app/models/user.model';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  faSync = faSync;
  user: User;
  loading: boolean = false;
  error: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.listenUserDetail();
    this.getUserByRouteParams();
  }

  listenUserDetail() {
    this._store.select('userDetail').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
  }

  getUserByRouteParams() {
    this._activatedRoute.params.subscribe(({ id }) => {
      this._store.dispatch(actions.getUserById({ id }));
    });
  }
}
