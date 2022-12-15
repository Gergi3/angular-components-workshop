import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { API_ERROR_TOKEN } from './shared/constants';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ThemeModule,
    UserModule
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR_TOKEN,
      useValue: new BehaviorSubject<Error | null>(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
