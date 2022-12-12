import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

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

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'register', component: RegisterComponent, canActivate: [IsNotAuthenticatedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsNotAuthenticatedGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'themes', component: ThemesComponent },
  { path: 'themes/new', component: NewThemeComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'themes/details/:id', component: ThemeDetailsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
