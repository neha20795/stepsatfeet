import { Component, OnInit } from '@angular/core';
import { Empreview } from '../../../models/empreview';
import { EmpreviewService } from '../../../services/empreview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreviewemployee',
  templateUrl: './addreviewemployee.component.html',
  styleUrls: ['./addreviewemployee.component.scss']
})
export class AddreviewemployeeComponent implements OnInit {

  constructor(private _emp : EmpreviewService, private route: Router) { }

  review : Empreview={
      empid : null,
      organizationid : null,
      review : [""],
      good : [""],
      bad : [""],
      position : "",
      rating : null
  };
  ngOnInit(): void {
  }
  add(){
      console.log(this.review);
      this._emp.addEmployeeReview(this.review).subscribe(data=>{
        console.log(data);
        console.log("data.statusText");
        this.review = this._emp.emptyReview();
        let myurl = "/";
        this.route.navigateByUrl(myurl).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      },
      error=>{
        console.log("error");
      });
    }

}
