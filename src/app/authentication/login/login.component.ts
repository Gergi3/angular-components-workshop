import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { createEmailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, createEmailValidator(['gmail'], ['bg', 'com'])]],
    password: ['', [Validators.minLength(5), Validators.required]]
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  loginHandler() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email!, password!);
    this.router.navigate([
      this.authService.isLoggedIn ? '/home' : '/login'
    ]);
  }
}
