import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLoginModel } from '../models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public signUp(user: User): Observable<User> {
    const PATH: string = '/api/Auth/sign-up';

    return this._http.post<any>(PATH, user).pipe(
      tap(data => localStorage.setItem('token', data.token))
    );
  }

  public signIn(logInModel: UserLoginModel): Observable<User> {
    const PATH: string = '/api/Auth/sign-in';

    return this._http.post<any>(PATH, logInModel).pipe(
      tap(data => localStorage.setItem('token', data.token))
    );
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getCurrent(): Observable<any> {
    const PATH = '/api/User/current';

    return this._http.get(PATH).pipe(
      tap(data => { console.log('CURRENT'); console.log(data) })
    )
  }
}
