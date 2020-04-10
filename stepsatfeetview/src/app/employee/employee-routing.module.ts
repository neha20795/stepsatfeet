import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { AddreviewempComponent } from './pages/addreviewemp/addreviewemp.component';

const routes: Routes = [
  { path: '',
    component: EmployeeComponent
  },
  {
    path: 'employeesearch/:name',
    component : SearchresultComponent,
    pathMatch : "full"
  },
  {
    path : 'addempreview/:id',
    component : AddreviewempComponent,
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
