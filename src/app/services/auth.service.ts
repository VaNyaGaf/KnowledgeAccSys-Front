import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLoginModel } from '../models';
import { tap } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private jwtService: JwtService) { }

  public signUp(user: User): Observable<User> {
    const PATH = '/api/Auth/sign-up';

    return this.http.post<any>(PATH, user).pipe(
      tap(data => this.jwtService.setToken(data.token))
    );
  }

  public signIn(logInModel: UserLoginModel): Observable<User> {
    const PATH = '/api/Auth/sign-in';

    return this.http.post<any>(PATH, logInModel).pipe(
      tap(data => this.jwtService.setToken(data.token))
    );
  }

  public signOut(): void {
    this.jwtService.removeToken();
  }

  public isSignedIn(): boolean {
    return this.jwtService.isSignedIn();
  }

  public getCurrent(): Observable<any> {
    const PATH = '/api/User/current';

    return this.http.get(PATH).pipe(
      tap(data => { console.log('CURRENT'); console.log(data); })
    );
  }
}
