import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../../shared/interfaces/index.model';
import { ActivatedRoute } from '@angular/router';
import { ThemesService } from '../themes.service';
import { ITheme } from 'src/app/shared/interfaces/theme.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {

  theme!: ITheme;
  posts!: IPost[];
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  get username() {
    return this.authService.username
  }

  constructor(
    private themesService: ThemesService,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    let themeId = this.route.snapshot.params['id'];
    this.themesService.getById(themeId)
      .subscribe(x => this.theme = x)
    this.postsService.getAllByThemeId(themeId)
      .subscribe(x => this.posts = x)
  }

}
