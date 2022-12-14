import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  @Input() group!: FormGroup;
  @Input() controlName!: string;

  get validators() {
    return Object.keys(this.group.get(this.controlName)?.errors as Object || {})
  }
}
