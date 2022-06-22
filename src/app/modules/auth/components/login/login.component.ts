import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  retUrl = '';
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _loginService: LoginService
  ) {}

  showSpinner: string = 'block';

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((params) => {
      let url = params.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }

  // onSubmit = (loginForm: NgForm) => {
  //   let login = loginForm.value;
  //   console.log(login);
  //   this._loginService.loginUser(login).subscribe({
  //     next: (data) => {
  //       let token = data;
  //       if ((token = '')) this._router.navigate(['/home']);
  //       else {
  //         localStorage.setItem('token', token);
  //       }
  //     },
  //   });
  // };

  onSubmit = (loginForm: NgForm) => {
    let login = loginForm.value;
    console.log(login);
    this._loginService.loginUser(login.username, login.password).subscribe({
      next: (data) => {
        console.log(data);
        if (data && this.retUrl != '') this._router.navigate([this.retUrl]);
        else this._router.navigate(['booking']);
      },
    });
  };
}
