import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserLoginModel } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/subjects-list');
    }
  }

  public signIn() {
    this.auth.signIn(<UserLoginModel> { email: this.email, password: this.password }).subscribe(
      data => {
        console.log('Sign-IN component: ', data);
        this.router.navigateByUrl('/subjects-list');
        console.log(this.auth.isSignedIn());
      },
      err => {
        alert('Invalid credentials');
        console.log(err);
      }
    );
  }

  public getCurrent() {
    this.auth.getCurrent().subscribe(
      data => { console.log('SUBSCRIEBE'); console.log(data); },
      err => console.log(err)
    );
  }
}
