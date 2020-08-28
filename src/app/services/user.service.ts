import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly urlApi = 'https://reqres.in/api';

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http
      .get(`${this.urlApi}/users?per_page=6`)
      .pipe(map((res: any) => res.data));
  }

  getUserById(id: string) {
    return this._http
      .get(`${this.urlApi}/users/${id}`)
      .pipe(map((res: any) => res.data));
  }
}
