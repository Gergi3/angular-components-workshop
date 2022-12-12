import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../interfaces/IPost';

@Component({
  selector: 'app-aside-list-item',
  templateUrl: './aside-list-item.component.html',
  styleUrls: ['./aside-list-item.component.scss']
})
export class AsideListItemComponent implements OnInit {
  @Input() post!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}