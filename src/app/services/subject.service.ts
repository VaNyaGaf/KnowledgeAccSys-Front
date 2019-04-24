import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Subject[]> {
    const PATH = '/api/subject';

    return this.http.get<any>(PATH);
  }

  public deleteSubject(subject: Subject): Observable<any> {
    const PATH = '/api/Subject' + `/${subject.id}`;

    return this.http.delete(PATH);
  }

  public addSubject(subject: Subject): Observable<Subject> {
    const PATH = '/api/subject';

    return this.http.post<any>(PATH, subject);
  }

  public updateSubject(subject: Subject): Observable<Subject> {
    const PATH = '/api/subject';

    return this.http.put<any>(PATH, subject);
  }


}
