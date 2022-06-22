import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private _loginService: LoginService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this._loginService.isUserLoggedIn()) return true;
    else {
      alert('Please Login');
      this._router.navigate(['login'], {
        queryParams: { returnUrl: route.url },
      });

      return false;
    }
  }
}
