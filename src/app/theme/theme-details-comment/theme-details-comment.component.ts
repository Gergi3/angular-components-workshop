import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/interfaces/index.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-theme-details-comment',
  templateUrl: './theme-details-comment.component.html',
  styleUrls: ['./theme-details-comment.component.scss']
})
export class ThemeDetailsCommentComponent {

  @Input() post!: IPost;
  @Input() isLoggedIn!: boolean;

  get isLiked() {
    return this.post.likes
      .some(x => x === this.authService.userId);
  }
  get likes() {
    return this.post.likes.length;
  }

  constructor(
    private authService: AuthService
  ) { }

  likeHandler() {
    if (!this.isLoggedIn) return;

    if (!this.isLiked && this.authService.userId) {
      this.post.likes.push(this.authService.userId);
      return;
    }

    this.post.likes = this.post.likes.filter(x => x !== this.authService.userId)
  }
}
