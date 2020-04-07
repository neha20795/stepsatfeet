import { Component, OnInit } from '@angular/core';
import { Emptoempreview } from '../../../models/emptoempreview';
import { EmptoempreviewService } from '../../../services/emptoempreview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreviewemp',
  templateUrl: './addreviewemp.component.html',
  styleUrls: ['./addreviewemp.component.scss']
})
export class AddreviewempComponent implements OnInit {

  constructor(private _emp : EmptoempreviewService, private route: Router) { }
  review : Emptoempreview={
    empidgiver : "",
    orgid : "",
    good : [""],
    bad :[""],
    positon : "",
    rating : null,
    empidreciever : null
  };
  ngOnInit(): void {
  }
  add(){
      console.log(this.review);
      this._emp.addReview(this.review).subscribe(data=>{
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
