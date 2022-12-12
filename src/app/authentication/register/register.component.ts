import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],
    tel: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  registerHandler() {
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
