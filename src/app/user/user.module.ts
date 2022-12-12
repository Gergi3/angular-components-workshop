import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }