import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _loginUrl: string = 'http://localhost:8080/';

  isLoggedIn: boolean = false;

  constructor(private _httpClient: HttpClient) {}

  isUserLoggedIn = () => {
    return this.isLoggedIn;
  };

  loginUser = (username: string, password: string): Observable<boolean> => {
    if (username == 'baba' && password == 'baba') {
      this.isLoggedIn = true;
      return of(this.isLoggedIn);
    }
    return of(false);
  };

  // loginUser = (user: User): boolean => {
  //   let url = `${this._userUrl}`.concat('authenticate');
  //   this._httpClient.post<string>(url, user).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       localStorage.setItem('token', data);
  //     },
  //   });
  //   return true;
  // };
}
