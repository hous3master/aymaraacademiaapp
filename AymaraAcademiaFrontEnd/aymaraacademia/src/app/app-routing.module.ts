import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupUserComponent } from './components/signup/signup-user/signup-user.component';
import { SignupEstudianteComponent } from './components/signup/signup-estudiante/signup-estudiante.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'signup', redirectTo: '/signup-user'},
  { path: 'signup-user', component: SignupUserComponent },
  { path: 'signup-estudiante', component: SignupEstudianteComponent},
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
