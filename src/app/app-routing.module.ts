import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ThemesComponent } from './theme/themes/themes.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme/theme-details/theme-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutComponent } from './authentication/logout/logout.component';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'themes/new', component: NewThemeComponent },
  { path: 'themes/details/:id', component: ThemeDetailsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
