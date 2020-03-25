import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeerComponent } from './employeer.component';

const routes: Routes = [{ path: '', component: EmployeerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeerRoutingModule { }
