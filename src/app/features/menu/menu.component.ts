import { AuthenticationService } from './../../core/services/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  firebaseErrorMessage: string;

  constructor(private authService: AuthenticationService) {
    this.firebaseErrorMessage = '';
  }

  loginForm = new FormGroup({
    username: new FormControl('jacobfenwick111@gmail.com', [
      Validators.required,
    ]),
    password: new FormControl('testing', [Validators.required]),
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).then((result) => {
      if (result == null) {
        // Do we add a progress bar here while we wait for data to come back???
        // null is success, false means there was an error
        console.log('logging in...');
      } else if (result.isValid == false) {
        console.log('login error', result);
        this.firebaseErrorMessage = result.message;
      }
    });
  }
}
