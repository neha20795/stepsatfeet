import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.scss']
})
export class EmploginComponent implements OnInit {

  constructor() { }
  componentName : boolean = true;
  ngOnInit(): void {
  }
  callComponent(){
    console.log("comp  value"+this.componentName)
    this.componentName = !this.componentName;
  }
}
