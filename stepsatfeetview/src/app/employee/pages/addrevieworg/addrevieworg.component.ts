import { Component, OnInit } from '@angular/core';
import { Orgreview } from '../../../models/orgreview';
import { OrgreviewService } from '../../../services/orgreview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrevieworg',
  templateUrl: './addrevieworg.component.html',
  styleUrls: ['./addrevieworg.component.scss']
})
export class AddrevieworgComponent implements OnInit {

  constructor(private _emp : OrgreviewService, private route: Router) { }
  review : Orgreview={
      empid : "",
      orgid : "",
      pros : [""],
      cons : [""],
      rating: null,
      type : ""
  };

  ngOnInit(): void {
  }
  add(){
    console.log(this.review);
    this._emp.addEmployeerReview(this.review).subscribe(data=>{
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
