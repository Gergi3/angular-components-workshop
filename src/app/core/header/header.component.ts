import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  isLoggedIn: boolean = this.authService.isLoggedIn;
  username: string = this.authService.currentUser?.username || 'Guest';

  constructor(
    private authService: AuthService
  ) { 
  }

  ngOnInit(): void {
    this.authService.currentUserChange.subscribe(value => {
      this.username = value?.username || 'Guest';
      this.isLoggedIn = !!value;
    });
  }
  
  ngOnChanges() {
  }
}
