import { Component, OnInit } from '@angular/core';
import { Orgreview } from '../../../models/orgreview';
import { DatastorerService } from '../../../services/datastorer.service';

import { OrgreviewService } from '../../../services/orgreview.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-addrevieworg',
  templateUrl: './addrevieworg.component.html',
  styleUrls: ['./addrevieworg.component.scss']
})
export class AddrevieworgComponent implements OnInit {
  reviewForm:FormGroup;
  constructor(
              private _emp : OrgreviewService,
              private route: Router,
              private _route : ActivatedRoute,
              private fb:FormBuilder,
              private dst : DatastorerService) {
                this.reviewForm=this.fb.group({
                  goodreviews: this.fb.array([]) ,
                  badreviews: this.fb.array([]) ,
                })
        }

  review : Orgreview={
      empid : "",
      orgid : "",
      pros : [""],
      cons : [""],
      rating: null,
      type : ""
  };
  dat : any;
  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('id');
      this.dat = name;
      // console.log(name);
    })
  }
  goodreviews(): FormArray {
    return this.reviewForm.get("goodreviews") as FormArray
  }
  newGoodReview(): FormGroup {
    return this.fb.group({
      goodreview: ''
    })
  }
  addGoodReview() {
    // console.log("Adding Good Review");
    this.goodreviews().push(this.newGoodReview());
  }
  removeGoodReview(mobIndex:number) {
    this.goodreviews().removeAt(mobIndex);
  }

  badreviews(): FormArray {
    return this.reviewForm.get("badreviews") as FormArray
  }
  newBadReview(): FormGroup {
    return this.fb.group({
      badreview: ''
    })
  }
  addBadReview() {
    // console.log("Adding Bad review");
    this.badreviews().push(this.newBadReview());
  }
  removebadReview(mobIndex:number) {
    this.badreviews().removeAt(mobIndex);
  }
  add(){
    // console.log(this.review);
    let badCount = (this.reviewForm.get(['badreviews']).value).length;
      let goodCount = (this.reviewForm.get(['goodreviews']).value).length;
      for(let i=0; i<goodCount;i++){
        let vars = this.reviewForm.get(['goodreviews',i]).get(['goodreview']).value;
        let value = vars;
        this.review.pros.push(value);
        // console.log(value);
      }
      for(let i=0; i<badCount;i++){
        let vars = this.reviewForm.get(['badreviews',i]).get(['badreview']).value;
        let value = vars;
        this.review.cons.push(value);
        // console.log(value);
      }
      // console.log(this.review);
    this._emp.addEmployeerReview(this.review).subscribe(data=>{
      // console.log(data);
      // console.log("data.statusText");
      this.review = this._emp.emptyReview();
      let myurl = "/";
      this.route.navigateByUrl(myurl).then(e => {
        if (e) {
          // console.log("Navigation is successful!");
        } else {
          // console.log("Navigation has failed!");
        }
      });
    },
    error=>{
      console.log("error");
    });
  }

}
