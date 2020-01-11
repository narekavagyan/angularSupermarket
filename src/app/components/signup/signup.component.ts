import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User, UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public FormValidation: FormGroup;
  public user: User = {
    name: '',
    surname: '',
    age: '',
    email: '',
    password: ''
  };
  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.checkForm();
  }

  public checkForm(): void {
    this.FormValidation = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      surname: ['', [Validators.required, Validators.minLength(4)]],
      age: [18, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  signup(): void {
    this.userService.signup(this.user);
    this.router.navigate(['/']);
  }
  ngOnInit() {}
}
