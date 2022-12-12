import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesComponent } from './themes/themes.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesListItemComponent } from './themes-list-item/themes-list-item.component';
import { AsideListComponent } from './aside-list/aside-list.component';
import { AsideListItemComponent } from './aside-list-item/aside-list-item.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { ThemeDetailsCommentComponent } from './theme-details-comment/theme-details-comment.component';
import { ThemeCreateCommentComponent } from './theme-create-comment/theme-create-comment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ThemesComponent,
    ThemesListComponent,
    ThemesListItemComponent,
    AsideListComponent,
    AsideListItemComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
    ThemeDetailsCommentComponent,
    ThemeCreateCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    ReactiveFormsModule
  ],
  exports: [
    ThemesComponent
  ]
  
})
export class ThemeModule { }
