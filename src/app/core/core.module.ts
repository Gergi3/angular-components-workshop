import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    ErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    ErrorHandlerComponent
  ]
})
export class CoreModule { }
