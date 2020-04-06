import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginuiComponent } from './sharedcomponent/loginui/loginui.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpsignupComponent } from './sharedcomponent/empsignup/empsignup.component';
import { EmploginComponent } from './sharedcomponent/emplogin/emplogin.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "employeeregistration",
    component : EmpsignupComponent
  },
  {
    path : "employeelogin",
    component : EmploginComponent
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'employeer', loadChildren: () => import('./employeer/employeer.module').then(m => m.EmployeerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
