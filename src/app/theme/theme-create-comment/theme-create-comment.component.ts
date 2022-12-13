import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-theme-create-comment',
  templateUrl: './theme-create-comment.component.html',
  styleUrls: ['./theme-create-comment.component.scss']
})
export class ThemeCreateCommentComponent {
  @Input() username!: string;

  constructor() { }
}
