import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.scss']
})
export class EmploginComponent implements OnInit {
  @Output() onMainPageCall= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  callComponent(){
    console.log("empLogin");
    this.onMainPageCall.emit("EmpLogin");
  }
}
