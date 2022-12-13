import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  get username(): string {
    return this.authService.username
  }

  constructor(
    private authService: AuthService
  ) { }
}
