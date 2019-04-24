import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private jwtService: JwtService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.isAdmin()) {
      return true;
    } else {
      this.router.navigateByUrl('./subjects-list');
      return false;
    }
  }

  private isAdmin(): boolean {
    return this.jwtService.getRole() === 'Admin';
  }
}
