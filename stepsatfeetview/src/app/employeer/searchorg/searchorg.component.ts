import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-searchorg',
  templateUrl: './searchorg.component.html',
  styleUrls: ['./searchorg.component.scss']
})
export class SearchorgComponent implements OnInit {

  textname : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
