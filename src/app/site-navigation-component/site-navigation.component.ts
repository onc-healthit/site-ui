import {Component, OnInit} from "@angular/core";
import {SiteAngularUiRoutingModule} from "../app-routing.module";

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  constructor(private siteRouting: SiteAngularUiRoutingModule) { }

  ngOnInit() {
  }

}
