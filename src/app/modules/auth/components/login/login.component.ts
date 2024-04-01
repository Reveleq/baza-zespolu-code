import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginData } from 'src/app/modules/core/models/login-model';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService) {}
  errorMessage = '';
  hide = true;
  userData: UserLoginData = {
    username: '',
    password: '',
  };
  login() {
    console.log(this.userData);
    this.authenticationService.login(this.userData).subscribe({
      next: (value) => {
        if (value.length === 0) {
          this.errorMessage = 'Podano nieprawidłowe dane do logowania';
        }
      },
      error: (err) => {
        window.alert('wystąpił błą∂');
      },
    });
  }

  // public login() {
  //   this.authenticationService.login(
  //     this.form.get('email')!.value,
  //     this.form!.get('password')!.value
  //   );
  // }
}
