import {Component, OnInit} from "@angular/core";
import {AppRoutingModule} from "../app-routing.module";
import {Angulartics2GoogleAnalytics} from "angulartics2";

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  constructor(private siteRouting: AppRoutingModule, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }

  ngOnInit() {
  }

}
