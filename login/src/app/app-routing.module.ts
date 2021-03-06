import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: ' ',
    component: AppComponent
},

{
  path: 'dashboard',
  component: DashboardComponent
},

{
  path: 'signin',
  component: SigninComponent
},

{ path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
