import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // isUserLoggedIn = () => {
  //   return this.isLoggedIn;
  // };

  // loginUser = (username: string, password: string): Observable<boolean> => {
  //   if (username == 'baba' && password == 'baba') {
  //     this.isLoggedIn = true;
  //     return of(this.isLoggedIn);
  //   }
  //   return of(false);
  // };

  // loginUser = (user: User): Observable<boolean> => {
  //   let url = `${this._loginUrl}`.concat('authenticate');
  //   this._httpClient.post<string>(url, user).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       localStorage.setItem('token', data);
  //     },
  //   });
  //   return of(true);
  // };

  // login = (user: User): Observable<string> => {
  //   let url = this._loginUrl + 'authenticate';
  //   return this._httpClient.post<string>(url, user);
  // };

  isLoggedIn: boolean = false;

  url = 'http://localhost:8080/';

  constructor(private _httpClient: HttpClient) {}

  // calling the server to generate token
  generateToken = (username: string, password: string) => {
    // generating token

    let crenditials = { username, password };
    return this._httpClient.post<string>(
      `${this.url}authenticate`,
      crenditials
    );
  };

  isUserLoggedIn = (): boolean => {
    return this.isLoggedIn;
  };

  // storing the token in local storage
  logginUser = (token: string): boolean => {
    localStorage.setItem('token', token);
    return true;
  };

  // whether the user is logged in or not
  isLogggedIn = (): boolean => {
    let token = localStorage.getItem('token');
    if (token == null || token == '') return false;
    return true;
  };

  getToken() {
    return localStorage.getItem('token');
  }

  logOut = (): void => {
    localStorage.removeItem('token');
  };
}
