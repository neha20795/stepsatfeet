import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { EmpdetailComponent } from './pages/empdetail/empdetail.component';
import { ImagedisplayComponent } from './pages/imagedisplay/imagedisplay.component';


@NgModule({
  declarations: [EmployeeComponent, HomeComponent, SearchEmpComponent, SearchresultComponent, EmpdetailComponent, ImagedisplayComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
