import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeerRoutingModule } from './employeer-routing.module';
import { EmployeerComponent } from './employeer.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [EmployeerComponent, HomeComponent],
  imports: [
    CommonModule,
    EmployeerRoutingModule
  ]
})
export class EmployeerModule { }
