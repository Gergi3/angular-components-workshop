import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ThemesService } from '../themes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {
  constructor(
    private themesService: ThemesService,
    private router: Router
  ) { }

  createThemeHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let name: string = form.value?.['themeName'] || '';

    let createdTheme = this.themesService.create(name);
    createdTheme.subscribe(x => {
      // TODO: Fix unauthorized
      this.router.navigate([`/themes/${x._id}`]);
    });
  }

  cancelHandler() {
    this.router.navigate(['/home']);
  }
}
