import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models';

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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public signUp() {
    this.auth.signUp(<User> { id: '', email: this.email, firstName: this.firstName, lastName: this.lastName, password: this.password}).subscribe(
      data => console.log('Sign-UP component: ', data),
      err => console.log('Error',err),
      () => console.log('COMPLETED')
    );
  }
  // signUp(user: User) {
  //   console.log(this.user);
  //   this._http.post<any>('/api/Auth/sign-up', this.user).subscribe(
  //     data => console.log('Success!', data),
  //     error => console.log('Error!', error)
  //   );
  //}
}
