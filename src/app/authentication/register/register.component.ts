import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { createEmailValidator } from 'src/app/shared/validators/email.validator';
import { confirmPasswordsValidator } from 'src/app/shared/validators/confirm-passwords.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../shared/form-error/form-error.component.scss', './register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, createEmailValidator(['gmail'], ['bg', 'com'])]],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]]
    }, { validator: confirmPasswordsValidator }),
    selectTel: ['00359', [Validators.required]],
    tel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  registerHandler() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return; 
    }

    const username = this.registerForm.get('username')?.value || ''
    const email = this.registerForm.get('email')?.value || ''
    const password = this.registerForm.get('password')?.value || ''
    const rePassword = this.registerForm.get('rePassword')?.value || ''
    const tel = this.registerForm.get('tel')?.value || ''

    if (password !== rePassword) return;

    this.authService.register(email, username, password, tel);
    this.router.navigate(['/home']);
    this.registerForm.reset();
  }
}
