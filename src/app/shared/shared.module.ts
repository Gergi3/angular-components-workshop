import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { FormErrorItemComponent } from './form-error-item/form-error-item.component';



@NgModule({
  declarations: [
    FormErrorComponent,
    FormErrorItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormErrorComponent
  ]
})
export class SharedModule { }
