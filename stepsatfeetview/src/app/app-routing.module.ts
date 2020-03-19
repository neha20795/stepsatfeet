import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginuiComponent } from './sharedcomponent/loginui/loginui.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
