import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/ITheme';
import { ThemesService } from '../themes.service';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent implements OnInit {

  themes: ITheme[] = [];

  constructor(
    private service: ThemesService
  ) { }

  ngOnInit(): void {
    this.service.getAllSortedBySubscription().subscribe(x => this.themes = x);
  }
}
