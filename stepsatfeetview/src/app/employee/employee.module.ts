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
import { UploadempimagesComponent } from './pages/uploadempimages/uploadempimages.component';
import { ReviewfromempComponent } from './pages/reviewfromemp/reviewfromemp.component';
import { ReviewfromorgComponent } from './pages/reviewfromorg/reviewfromorg.component';
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
            UploadempimagesComponent,
            ReviewfromempComponent,
            ReviewfromorgComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
