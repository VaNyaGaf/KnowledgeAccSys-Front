import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models';
import { Router } from '@angular/router';
import { JwtService } from '../services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/subjects-list');
    }
  }

  public signUp() {
    this.auth.signUp(<User>{
      id: '',
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password
    })
      .subscribe(
        data => {
          console.log('Sign-UP component: ', data);
          this.router.navigateByUrl('/subjects-list');
        },
        err => console.log('Error', err),
        () => console.log('COMPLETED')
      );
  }
}
