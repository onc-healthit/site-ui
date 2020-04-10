import {Component, OnInit} from "@angular/core";
import {AppRoutingModule} from "../app-routing.module";
import {Angulartics2GoogleAnalytics} from "angulartics2";
import {environment} from "environments/environment";

const ett_url = environment.ett_url;
const host_url = environment.host_url;

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {
  public ett_url: string;
  public host_url: string;

  constructor(private siteRouting: AppRoutingModule, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    this.ett_url = ett_url;
    this.host_url = host_url;  
  }

  ngOnInit() {
  }

}
