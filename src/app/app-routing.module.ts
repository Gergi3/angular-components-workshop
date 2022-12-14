import { NgModule } from '@angular/core';
import { RouterModule, Route, TitleStrategy } from '@angular/router';

import { ThemesComponent } from './theme/themes/themes.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme/theme-details/theme-details.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { IsNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { PageTitleStrategy } from './core/page-title-strategy';
import { paths } from './routing-paths';

const routes: Route[] = [
  {
    path: '',
    redirectTo: paths.homepage,
    pathMatch: 'full'
  },
  {
    path: paths.homepage,
    component: HomepageComponent,
    title: 'Homepage'
  },
  {
    path: paths.register,
    component: RegisterComponent,
    canActivate: [IsNotAuthenticatedGuard],
    title: 'Register'
  },
  {
    path: paths.login,
    component: LoginComponent,
    canActivate: [IsNotAuthenticatedGuard],
    title: 'Login'
  },
  {
    path: paths.logout,
    component: LogoutComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: paths.profile,
    component: UserProfileComponent,
    canActivate: [IsAuthenticatedGuard],
    title: 'Profile'
  },
  {
    path: paths.themes,
    component: ThemesComponent,
    title: 'Themes'
  },
  {
    path: paths.newTheme,
    component: NewThemeComponent,
    canActivate: [IsAuthenticatedGuard],
    title: 'New Theme'
  },
  {
    path: paths.themeDetails,
    component: ThemeDetailsComponent,
    title: 'Theme Details'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404'
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    }
  ]
})
export class AppRoutingModule { }
