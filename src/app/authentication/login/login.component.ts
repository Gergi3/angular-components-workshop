import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  loginHandler() {
    const email = this.loginForm.get('email')?.value || '';
    const password = this.loginForm.get('password')?.value || '';

    const loginInfo = { email, password };
    this.authService.login(loginInfo);
    this.router.navigate(['/home']);
  }

}
