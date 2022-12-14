import { IIndexable } from '../interfaces/indexable.model';

export const validationErrorMessages: IIndexable = {
  required: (name: string) => `${name} is required!`,
  strictEmail: () => 'Email is not valid!',
  minlength: (name: string, options: IIndexable) => `${name} must be at least ${options['min']} characters!`,
  maxlength: (name: string, options: IIndexable) => `${name} must be less than ${options['max']} characters!`,
  pattern: (name: string, options: IIndexable) => `${name} does not match ${options['pattern']}` ,
  confirmPasswords: () => `Re-Password does not match Password`
}