import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  isLoggedIn: boolean = this.authService.isLoggedIn;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
