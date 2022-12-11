import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesComponent } from './themes/themes.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesListItemComponent } from './themes-list-item/themes-list-item.component';
import { AsideListComponent } from './aside-list/aside-list.component';
import { AsideListItemComponent } from './aside-list-item/aside-list-item.component';


@NgModule({
  declarations: [
    ThemesComponent,
    ThemesListComponent,
    ThemesListItemComponent,
    AsideListComponent,
    AsideListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesComponent
  ]
  
})
export class ThemeModule { }
