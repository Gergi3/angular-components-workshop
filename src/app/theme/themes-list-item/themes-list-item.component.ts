import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../../interfaces/ITheme';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-themes-list-item',
  templateUrl: './themes-list-item.component.html',
  styleUrls: ['./themes-list-item.component.scss']
})
export class ThemesListItemComponent implements OnInit {
  @Input() theme!: ITheme;
  isOwner!: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isOwner = (this.authService.currentUser?.themes || [])
      .some((x: string) => x === this.theme._id);
  }

  subscribeHandler() {
    if (!this.authService.currentUser?.themes) {
      return;
    }
    
    if (this.isOwner) {
      this.authService.currentUser.themes = this.authService.currentUser.themes.filter(x => x == this.theme._id);
      this.isOwner = false;
    } else {
      this.authService.currentUser.themes.push(this.theme._id);
      this.isOwner = true;
    }
    

  }
}
