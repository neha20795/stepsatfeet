import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginuiComponent } from './sharedcomponent/loginui/loginui.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'employeer', loadChildren: () => import('./employeer/employeer.module').then(m => m.EmployeerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
