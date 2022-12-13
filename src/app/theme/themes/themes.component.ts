import { Component } from '@angular/core';
import { ITheme } from 'src/app/shared/interfaces/index.model';
import { AuthService } from '../../authentication/auth.service';
import { ThemesService } from '../themes.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  themes: ITheme[] = [];
  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  constructor(
    private authService: AuthService,
    private themesService: ThemesService,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.themesService.getAllSortedBySubscription().subscribe(x => this.themes = x);
  }
}
