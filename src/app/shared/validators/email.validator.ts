import { AbstractControl, ValidatorFn } from "@angular/forms";

export function createEmailValidator(validEmailDomains: string[], validTopLevelDomain: string[]) {
  const emailValidator: ValidatorFn = (control: AbstractControl) => {
    if (control.value?.length === 0) { return null; }

    const emailArgs: string[] = control.value?.split('@');
    const domainsArgs = emailArgs && emailArgs[1]?.split('.');

    const isValid = emailArgs && domainsArgs 
      && emailArgs[0]?.length >= 6
      && validEmailDomains?.includes(domainsArgs[0])
      && validTopLevelDomain?.includes(domainsArgs[1])

    return isValid
      ? null
      : { strictEmail: true }
  }
  return emailValidator;
}