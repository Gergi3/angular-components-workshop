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

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent,
    title: 'Homepage'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsNotAuthenticatedGuard],
    title: 'Register'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotAuthenticatedGuard],
    title: 'Login'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [IsAuthenticatedGuard],
    title: 'Profile'
  },
  {
    path: 'themes',
    component: ThemesComponent,
    title: 'Themes'
  },
  {
    path: 'themes/new',
    component: NewThemeComponent,
    canActivate: [IsAuthenticatedGuard],
    title: 'New Theme'
  },
  {
    path: 'themes/details/:id',
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
