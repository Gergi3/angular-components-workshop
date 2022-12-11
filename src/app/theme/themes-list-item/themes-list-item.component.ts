import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../../interfaces/ITheme';

@Component({
  selector: 'app-themes-list-item',
  templateUrl: './themes-list-item.component.html',
  styleUrls: ['./themes-list-item.component.scss']
})
export class ThemesListItemComponent implements OnInit {
  @Input() theme!: ITheme;

  constructor() { }

  ngOnInit(): void {
  }

}
