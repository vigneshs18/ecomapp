import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IUser } from '../service/user';
import { LoginService } from '../service/login.service';
import { EncDecService } from '@ecom/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService,
              private snackbar: MatSnackBar,
              private router: Router,
              private encService: EncDecService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe((response) => {
      if (response.status === 'success') {
        const role = this.encService.encrypt(response.role, '');
        sessionStorage.setItem('role', role);
        sessionStorage.setItem('token', response.data);
        this.navigate(response.role);
      } else {
        this.snackbar.open(response.message, 'Login', {
          duration: 2000
        });
      }
    });
  }

  navigate(role: string) {
    switch (role) {
      case 'User':
        // redirect to admin
        this.router.navigate(['/user/profile']);
        break;
      case 'Admin':
        // redirect to admin
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        // any other case
        this.snackbar.open('User does not belong to a valid role', 'Login', {
          duration: 1000
        });
    }
  }

}
