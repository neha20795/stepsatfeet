import { Component, OnInit } from '@angular/core';
import { FindreviewsbyemployeeService } from '../../service/findreviewsbyemployee.service'
@Component({
  selector: 'app-reviewbyyou',
  templateUrl: './reviewbyyou.component.html',
  styleUrls: ['./reviewbyyou.component.scss']
})
export class ReviewbyyouComponent implements OnInit {

  constructor(private _findemployee : FindreviewsbyemployeeService) { }

  ngOnInit(): void {
  }

}
