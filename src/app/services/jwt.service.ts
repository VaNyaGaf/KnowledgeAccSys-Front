import { Injectable } from '@angular/core';
import { JwtPayload } from '../models';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private token = {
    full: null as string,
    payload: null as JwtPayload
  };

  constructor() { }

  public setToken(token: string): void {
    this.token.full = token;
    this.token.payload = this.getPayload(token);
    localStorage.setItem('token', this.token.full);
    console.log('JwtService', this.token);
  }

  public removeToken(): void {
    this.token.full = null;
    this.token.payload = null;
    localStorage.removeItem('token');
  }

  public getRole(): string {
    return this.token.payload.role;
  }

  public isSignedIn(): boolean {
    return !!this.token;
  }

  private getPayload(token: string): JwtPayload {
    const encodedPayload = token.split('.')[1];
    const payloadJson = atob(encodedPayload);
    const payloadObj = JSON.parse(payloadJson);

    return <JwtPayload>{
      subjectId: payloadObj.sub,
      issuedAt: payloadObj.iat,
      role: payloadObj['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
      expiration: payloadObj.exp,
      issuer: payloadObj.iss,
      audience: payloadObj.aud
    };
  }
}
