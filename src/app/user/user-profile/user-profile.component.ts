import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createEmailValidator } from 'src/app/shared/validators/email.validator';
import { AuthService } from '../../authentication/auth.service';
import { IUser } from '../../shared/interfaces/index.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user: IUser | null = this.authService.currentUser;
  
  profileForm = this.fb.group({
    username: [this.user?.username, [Validators.required, Validators.minLength(5)]],
    email: [this.user?.email, [Validators.required, createEmailValidator(['gmail'], ['bg', 'com'])]],
    selectTel: ['+359', [Validators.required]],
    tel: [this.user?.tel, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
  })

  isEdit: boolean = false;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  editProfileHandler() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const username = this.profileForm.get('username')?.value || ''
    const email = this.profileForm.get('email')?.value || ''
    const tel = this.profileForm.get('tel')?.value || ''

    let userId = this.authService.userId || '';
    this.usersService.putById(userId, { username, email, tel });
    this.authService.changeUser(this.usersService.getById(userId) || null);
    this.user = this.authService.currentUser;
    
    this.toggleEdit();    
  }
}
