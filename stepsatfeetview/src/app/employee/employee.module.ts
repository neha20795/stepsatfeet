import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { EmpdetailComponent } from './pages/empdetail/empdetail.component';
import { ImagedisplayComponent } from './pages/imagedisplay/imagedisplay.component';
import { AddrevieworgComponent } from './pages/addrevieworg/addrevieworg.component';
import { AddreviewempComponent } from './pages/addreviewemp/addreviewemp.component';
import { UpdatedetailComponent } from './pages/updatedetail/updatedetail.component';
import { ReviewbyyouComponent } from './pages/reviewbyyou/reviewbyyou.component';


// import { ReviewfromemployeeComponent } from './pages/reviewfromemployee/reviewfromemployee.component';


@NgModule({
  declarations: [
            EmployeeComponent,
            HomeComponent,
            SearchEmpComponent,
            SearchresultComponent,
            EmpdetailComponent,
            ImagedisplayComponent,
            AddrevieworgComponent,
            AddreviewempComponent,
            UpdatedetailComponent,
            ReviewbyyouComponent,

          ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
