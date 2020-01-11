import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: User;
  public isLogged: boolean;
  public isTrueData = false;
  constructor(public userService: UserService) {}
  fn() {
    if (this.user && this.isLogged) {
      this.userService.loginfn();
    }
  }
  ngOnInit() {
    this.userService.isTrueDataSubject$.subscribe(i => (this.isTrueData = i));
    this.userService.userSubject$.subscribe(e => (this.user = e));
    this.userService.userIslogged$.subscribe(l => (this.isLogged = l));
  }
}
