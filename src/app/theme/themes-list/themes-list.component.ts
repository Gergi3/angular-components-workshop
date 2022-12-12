import { Component, OnInit } from '@angular/core';
import { ITheme } from '../../interfaces/ITheme';
import { ThemesService } from '../themes.service';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent implements OnInit {

  themes: ITheme[] = [];
  isLoggedIn: boolean = this.authService.isLoggedIn;

  constructor(
    public authService: AuthService,
    private themesService: ThemesService
  ) { }

  ngOnInit(): void {
    this.themesService.getAllSortedBySubscription().subscribe(x => this.themes = x);
  }
}
