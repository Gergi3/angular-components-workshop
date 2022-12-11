import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
  }
}
