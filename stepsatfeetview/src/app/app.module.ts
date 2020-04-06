import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmploginComponent } from './sharedcomponent/emplogin/emplogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HowweworkComponent } from './pages/howwework/howwework.component';
import { FooterheadComponent } from './pages/footerhead/footerhead.component';
import { FooterComponent } from './footer/footer.component';
import { LoginuiComponent } from './sharedcomponent/loginui/loginui.component';
import { EmployeerloginComponent } from './sharedcomponent/employeerlogin/employeerlogin.component';
import { EmployeerloginuiComponent } from './sharedcomponent/employeerloginui/employeerloginui.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpsignupComponent } from './sharedcomponent/empsignup/empsignup.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmploginComponent,
    HowweworkComponent,
    FooterheadComponent,
    FooterComponent,
    LoginuiComponent,
    EmployeerloginComponent,
    EmployeerloginuiComponent,
    HomeComponent,
    EmpsignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
