import { Component, OnInit,Input } from '@angular/core';
import { DatastorerService } from '../../../services/datastorer.service';
@Component({
  selector: 'app-imagedisplay',
  templateUrl: './imagedisplay.component.html',
  styleUrls: ['./imagedisplay.component.scss']
})
export class ImagedisplayComponent implements OnInit {
  @Input() id : string;
  url : string;
  constructor(private _dst : DatastorerService) { }
 imagename : string;
  ngOnInit(): void {
    this.url = this.id;
    // const dataObservable = this._dst.getData();
    // dataObservable.subscribe((imgname: string) => {
    //     this.imagename = imgname;
    // });
  }

}
