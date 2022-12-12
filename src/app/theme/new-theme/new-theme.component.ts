import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThemesService } from '../themes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {

  themeForm = this.fb.group({
    themeName: [''],
    postText: ['']
  })

  constructor(
    private fb: FormBuilder,
    private themesService: ThemesService,
    private router: Router
  ) { }

  createThemeHandler() {
    let name = this.themeForm.get('themeName')?.value;
    if (name) {
      let createdTheme = this.themesService.createTheme(name);
      createdTheme.subscribe(x => {
        // TODO: Fix unauthorized
        this.router.navigate([`/themes/${x._id}`]);
      });
    }
  }

  redirectToHomepage() {
    this.router.navigate(['/home']);
  }
}
