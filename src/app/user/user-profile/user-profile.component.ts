import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user!: IUser;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.currentUser) {
      this.user = this.authService.currentUser;
    } else {
      this.router.navigate(['/home'])
    }
  }

}
