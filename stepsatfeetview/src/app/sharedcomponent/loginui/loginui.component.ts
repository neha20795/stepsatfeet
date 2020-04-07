import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-loginui',
  templateUrl: './loginui.component.html',
  styleUrls: ['./loginui.component.scss']
})
export class LoginuiComponent implements OnInit {
  @Output() onMainPageCall= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  callComponent(){
    console.log("empLogin");
    this.onMainPageCall.emit("EmpLogin");
  }
}

