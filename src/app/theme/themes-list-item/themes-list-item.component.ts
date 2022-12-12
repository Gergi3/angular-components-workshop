import { Component,Input } from '@angular/core';
import { ITheme } from '../../shared/interfaces/theme.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-themes-list-item',
  templateUrl: './themes-list-item.component.html',
  styleUrls: ['./themes-list-item.component.scss']
})
export class ThemesListItemComponent {
  @Input() theme!: ITheme;
  isLoggedIn = this.authService.isLoggedIn;
  
  get isSubscriber() {
    return this.theme.subscribers
      .some((x: string) => x === this.authService.currentUser?._id);
  }
  get subscribers() {
    return this.theme.subscribers.length;
  }

  constructor(
    private authService: AuthService
  ) { }

  subscribeHandler() {
    let userId = this.authService.currentUser?._id

    if (this.isSubscriber) {
      this.theme.subscribers = this.theme.subscribers
        .filter(x => x !== userId);
    } else if (userId) {
      this.theme.subscribers.push(userId);
    }
  }
}
