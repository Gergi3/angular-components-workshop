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
    tel: ['', [Validators.minLength(10), Validators.maxLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  registerHandler() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { username, email, passwords: { password, rePassword }, tel } = this.registerForm.value;

    this.authService.register(email!, username!, password!, rePassword!, tel!)
      .subscribe({
        next: user => this.router.navigate(['/home']),
        error: err => console.log(err)
      });
  }
}
