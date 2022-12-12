import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-theme-create-comment',
  templateUrl: './theme-create-comment.component.html',
  styleUrls: ['./theme-create-comment.component.scss']
})
export class ThemeCreateCommentComponent implements OnInit {
  username = this.authService.currentUser?.username;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
