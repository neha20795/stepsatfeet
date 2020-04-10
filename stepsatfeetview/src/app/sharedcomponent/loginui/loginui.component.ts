import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginui',
  templateUrl: './loginui.component.html',
  styleUrls: ['./loginui.component.scss']
})
export class LoginuiComponent implements OnInit {

  constructor() { }
  componentName : boolean = true;
  ngOnInit(): void {
  }
  callAnotherComponent(){
    this.componentName = !this.componentName;
  }
}
