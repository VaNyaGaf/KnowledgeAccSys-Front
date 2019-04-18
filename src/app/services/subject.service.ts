import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<Subject[]> {
    const PATH = '/api/subject';

    return this._http.get<any>(PATH);
  }

}
