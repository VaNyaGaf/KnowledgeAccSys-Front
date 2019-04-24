import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User, UserSubject } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getCurrent(): any {
    const PATH = '/api/User/current';

    return this.http.get<any>(PATH).pipe(
      tap(data => {
        console.log('Current user\n', data);
      })
    );
  }

  public getUsers(): Observable<User[]> {
    const PATH = '/api/User/';

    return this.http.get<any>(PATH);
  }

  public getUserById(user: User): Observable<User> {
    const PATH = '/api/User/' +  `/${user.id}`;

    return this.http.get<any>(PATH);
  }

  public deleteUser(user: User): Observable<any> {
    const PATH = '/api/User' + `/${user.id}`;

    return this.http.delete(PATH);
  }

  public rateSubject(userSubjectModel: UserSubject): Observable<any> {
    const PATH = '/api/User/rateSubject';

    return this.http.put(PATH, userSubjectModel);
  }

}
