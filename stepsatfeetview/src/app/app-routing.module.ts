import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpsignupComponent } from './sharedcomponent/empsignup/empsignup.component';
import { EmploginComponent } from './sharedcomponent/emplogin/emplogin.component';
import { EmployeersignupComponent } from './sharedcomponent/employeersignup/employeersignup.component';
import { UpdateinfoComponent } from './pages/updateinfo/updateinfo.component';
import { UploadimagesComponent } from './pages/uploadimages/uploadimages.component';
import { ReviewbyyouComponent } from './pages/reviewbyyou/reviewbyyou.component';
import { ReviewforyouComponent } from './pages/reviewforyou/reviewforyou.component';
import { ConfidentialinforequestComponent } from './pages/confidentialinforequest/confidentialinforequest.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "employeeregistration",
    component : EmpsignupComponent
  },
  {
    path : "employeerregistration",
    component : EmployeersignupComponent
  },
  {
    path : "employeelogin",
    component : EmploginComponent
  },
  {
    path : "updatedetail",
    component : UpdateinfoComponent
  },
  {
    path : "uploadimages",
    component : UploadimagesComponent
  },
  {
    path : "reviewbyyou",
    component : ReviewbyyouComponent
  },
  {
    path : "reviewforyou",
    component : ReviewforyouComponent
  },
  {
    path : "confidentialinforequest",
    component : ConfidentialinforequestComponent
  },
  {
    path : "review",
    component : ReviewComponent
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'employeer', loadChildren: () => import('./employeer/employeer.module').then(m => m.EmployeerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
