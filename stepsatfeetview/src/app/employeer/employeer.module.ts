import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeerRoutingModule } from './employeer-routing.module';
import { EmployeerComponent } from './employeer.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagedisplayComponent } from './pages/imagedisplay/imagedisplay.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { AddreviewemployeeComponent } from './pages/addreviewemployee/addreviewemployee.component';
import { AddempconfidentialreviewComponent } from './pages/addempconfidentialreview/addempconfidentialreview.component';
import { SearchorgComponent } from './searchorg/searchorg.component';
import { OrgdetailComponent } from './pages/orgdetail/orgdetail.component';


@NgModule({
  declarations: [EmployeerComponent, HomeComponent, ImagedisplayComponent, SearchresultComponent, AddreviewemployeeComponent, AddempconfidentialreviewComponent, SearchorgComponent, OrgdetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmployeerRoutingModule
  ]
})
export class EmployeerModule { }
