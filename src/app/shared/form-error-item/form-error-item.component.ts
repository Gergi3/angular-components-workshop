import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IIndexable } from '../interfaces/indexable.model';
import { UtilsService } from '../utils.service';
import { validationErrorMessages } from '../validators/validation-error-messages';

@Component({
  selector: 'app-form-error-item',
  templateUrl: './form-error-item.component.html',
  styleUrls: ['./form-error-item.component.scss']
})
export class FormErrorItemComponent {
  @Input() group!: FormGroup;
  @Input() controlName!: string;
  @Input() validator!: string;

  get control() {
    return this.group.get(this.controlName)
  }

  get isInvalid() { return this.control?.errors?.[this.validator] }

  get errorMessage() {

    const messageFn = validationErrorMessages[this.validator];

    if (typeof messageFn !== 'function') { return messageFn; }

    let options: IIndexable = {};
    if (this.validator === 'minlength') {
      options['min'] = this.control?.errors?.['minlength'].requiredLength
    } else if (this.validator === 'maxlength') {
      options['max'] = this.control?.errors?.['maxlength'].requiredLength
    } else if (this.validator === 'pattern') {
      options['pattern'] = this.control?.errors?.['pattern']
    }

    const nameCapitalized = this.utilsService.capitalize(this.controlName);

    return messageFn(nameCapitalized, options);
  }

  constructor(
    private utilsService: UtilsService
  ) { }
}
