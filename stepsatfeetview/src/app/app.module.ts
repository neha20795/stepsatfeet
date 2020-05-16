import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmploginComponent } from './sharedcomponent/emplogin/emplogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HowweworkComponent } from './pages/howwework/howwework.component';
import { FooterheadComponent } from './pages/footerhead/footerhead.component';
import { FooterComponent } from './footer/footer.component';
import { LoginuiComponent } from './sharedcomponent/loginui/loginui.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpsignupComponent } from './sharedcomponent/empsignup/empsignup.component';
import { EmployeersignupComponent } from './sharedcomponent/employeersignup/employeersignup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
// import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { UploadimagesComponent } from './pages/uploadimages/uploadimages.component';
import { AddmoreinfoComponent } from './pages/addmoreinfo/addmoreinfo.component';


// import { SearchEmpComponent } from './employee/search-emp/search-emp.component';
// import { SearchorgComponent } from './employeer/searchorg/searchorg.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmploginComponent,
    HowweworkComponent,
    FooterheadComponent,
    FooterComponent,
    LoginuiComponent,
    HomeComponent,
    EmpsignupComponent,
    EmployeersignupComponent,
    DashboardComponent,
    ContactusComponent,
    UploadimagesComponent,
    AddmoreinfoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
