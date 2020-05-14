import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagedisplay',
  templateUrl: './imagedisplay.component.html',
  styleUrls: ['./imagedisplay.component.scss']
})
export class ImagedisplayComponent implements OnInit {
  @Input() id : string;
  url : string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.id)
    this.url = this.id;
    // console.log(this.url);
  }

}
