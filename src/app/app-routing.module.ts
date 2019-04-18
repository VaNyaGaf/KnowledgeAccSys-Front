import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';

const routes: Routes = [
  // { path: '',  pathMatch: 'full' }
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'subjects-list', component: SubjectsListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
