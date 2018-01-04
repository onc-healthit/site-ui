/**
 * Created by Brian on 9/23/2016.
 */
import {Component, OnInit} from "@angular/core";
import {environment} from "../../environments/environment";

const scorecard_url = environment.scorecard_url;

@Component({
    selector: 'site-sandbox-ccda',
    templateUrl: 'sandbox-ccda.component.html'
})
export class SandboxCCDAComponent implements OnInit {
  private scorecard_url: string;
  
  constructor() {
    this.scorecard_url = scorecard_url;
  }

  ngOnInit() {
  }
}
