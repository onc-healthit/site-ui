import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'page-overview-header',
  templateUrl: 'page-overview-header.component.html',
  styleUrls: ['page-overview-header.component.css']
})
export class PageOverviewHeaderComponent implements OnInit {
  @Input() title:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
