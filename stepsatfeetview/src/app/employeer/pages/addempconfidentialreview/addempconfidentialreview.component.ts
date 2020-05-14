import { Component, OnInit } from '@angular/core';
import { Confidentialinfo } from '../../../models/confidentialinfo';
import { ConfidentialreviewService } from '../../../services/confidentialreview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addempconfidentialreview',
  templateUrl: './addempconfidentialreview.component.html',
  styleUrls: ['./addempconfidentialreview.component.scss']
})
export class AddempconfidentialreviewComponent implements OnInit {

  constructor(private _emp : ConfidentialreviewService, private route: Router) { }
  review : Confidentialinfo={
      empid : null,
      orgidrequired : "",
      orgidgiver : "",
      doj : new Date(),
      salary : null,
      bond : null,
      terms : "",
      behavior : [""],
      reporting : null,
      reasontoleave : [""]
  };
  ngOnInit(): void {
  }
  add(){
      // console.log(this.review);
      this._emp.addConfidentialReview(this.review).subscribe(data=>{
        // console.log(data);
        // console.log("data.statusText");
        this.review = {
          empid : null,
          orgidrequired : "",
          orgidgiver : "",
          doj : new Date(),
          salary : null,
          bond : null,
          terms : "",
          behavior : [""],
          reporting : null,
          reasontoleave : [""]
      };
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
