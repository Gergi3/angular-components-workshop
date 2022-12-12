import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  isLoggedIn!: boolean;
  username: string = this.authService.currentUser?.username || 'Guest';

  constructor(
    public authService: AuthService
  ) { 
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn
  }
  
  ngOnChanges() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
