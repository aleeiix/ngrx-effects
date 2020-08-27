import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  userId: string;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  searchUser() {
    this._router.navigate(['/user', this.userId]);
  }
}
