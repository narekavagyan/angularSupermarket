import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public email: string;
  public password: string | number;
  public alertMessage = '';
  constructor(private userService: UserService, public router: Router) {}

  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.userService.checkData(true);
      this.router.navigate(['/admin']);
      this.alertMessage = '';
    } else if (this.user) {
      if (
        this.user.email === this.email &&
        this.user.password === this.password
      ) {
        this.userService.checkData(true);
        this.router.navigate(['/']);
        this.alertMessage = 'մուտքագրված տվյալները սխալ են';
      } else {
        this.userService.checkData(false);
        this.router.navigate(['/login']);
        this.alertMessage = '';
      }
      this.userService.loginfn();
    }

    this.alertMessage = 'մուտքագրված տվյալները սխալ են';
  }

  ngOnInit() {
    this.userService.userSubject$.subscribe(e => (this.user = e));
  }
}
