import { Component, Input } from '@angular/core';
import { ITheme } from '../../shared/interfaces/index.model';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent {
  @Input() themes!: ITheme[];
  @Input() isLoggedIn!: boolean;
  constructor() { }
}
