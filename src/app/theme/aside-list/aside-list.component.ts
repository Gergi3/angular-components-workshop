import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces/index.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})
export class AsideListComponent implements OnInit {

  posts!: IPost[]
  constructor(
    private service: PostsService
  ) { }

  ngOnInit(): void {
    this.service.getAllLimited(5).subscribe(x => this.posts = x);
  }

}
