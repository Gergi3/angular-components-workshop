import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/interfaces/post.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-theme-details-comment',
  templateUrl: './theme-details-comment.component.html',
  styleUrls: ['./theme-details-comment.component.scss']
})
export class ThemeDetailsCommentComponent  {

  @Input() post!: IPost;
  isLoggedIn = this.authService.isLoggedIn;

  get isLiked() {
    return this.post.likes.some(x => x === this.authService.currentUser?._id);
  }
  get likes() {
    return this.post.likes.length;
  }

  constructor(
    private authService: AuthService
  ) { }

  likeHandler() {
    if (!this.isLoggedIn) {
      return;
    }

    if (!this.isLiked) {
      this.post.likes.push(this.authService.currentUser?._id || '');
    } else {
      this.post.likes = this.post.likes
        .filter(x => x !== this.authService.currentUser?._id)
    }
  }
}
