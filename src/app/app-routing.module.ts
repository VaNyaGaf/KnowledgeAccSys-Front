import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  // { path: '',  pathMatch: 'full' }
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'subjects-list', component: SubjectsListComponent, canActivate: [AuthGuard] },
  { path: 'admin/user-list', component: UserListComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
