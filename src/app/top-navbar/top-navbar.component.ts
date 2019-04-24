import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  public isSigned: boolean;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  public isSignedIn(): boolean {
    this.isSigned = this.authService.isSignedIn();
    return this.isSigned;
  }

  public logOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/sign-in');
    this.isSigned = false;
  }
}
