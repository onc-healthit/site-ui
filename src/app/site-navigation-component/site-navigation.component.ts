import {Component, OnInit} from "@angular/core";
import {AppRoutingModule} from "../app-routing.module";

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  constructor(private siteRouting: AppRoutingModule) { }

  ngOnInit() {
  }

}
