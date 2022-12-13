import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { IUser } from '../../shared/interfaces/index.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user: IUser | null = this.authService.currentUser;

  constructor(
    private authService: AuthService
  ) { }
}
