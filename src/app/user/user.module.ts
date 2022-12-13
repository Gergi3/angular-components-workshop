import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';



@NgModule({
  declarations: [UserProfileComponent, UserProfileEditComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
