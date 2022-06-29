import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedIn: any;
  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {
    this.loggedIn = this._loginService.isUserLoggedIn();
  }

  onClickLogout = () => {
    this._loginService.logOut();
    this.loggedIn = true;
  };
}
