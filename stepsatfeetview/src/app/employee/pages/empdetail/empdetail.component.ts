import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
@Input() id : any;
  constructor(private _emp : EmployeeService) { }
  data : any;
  ngOnInit(): void {
    this.data = this._emp.findEmployee(this.id);
    console.log(this.data);
  }

}
