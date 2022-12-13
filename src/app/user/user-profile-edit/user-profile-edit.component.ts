import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { IUser } from '../../shared/interfaces/user.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent  {

  user: IUser | null = this.authService.currentUser;

  constructor(
    private authService: AuthService
  ) { }
}
