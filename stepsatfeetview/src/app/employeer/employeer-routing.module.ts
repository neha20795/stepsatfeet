import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeerComponent } from './employeer.component';
import { SearchorgComponent } from './searchorg/searchorg.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { OrgdetailComponent } from './pages/orgdetail/orgdetail.component';
import { AddrevieworgComponent } from '../employee/pages/addrevieworg/addrevieworg.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeerComponent
  },
  {
    path : 'orgsearch/:name',
    component : SearchresultComponent,
    pathMatch : "full"
  },
  {
    path : 'addorgreview/:id',
    component : AddrevieworgComponent,
    pathMatch : "full"
  },
  {
    path : 'orgdetail/:emailId',
    component : OrgdetailComponent,
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeerRoutingModule { }
