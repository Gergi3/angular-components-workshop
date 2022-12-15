import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService
  ) { 
    console.log('asda');
    
    this.authService.getProfile().subscribe({
      next: () => this.isAuthenticated = true,
      error: () => this.isAuthenticated = true
    })
  }

  ngOnInit(): void {

  }

}
