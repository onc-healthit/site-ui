import {Component, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";

const scorecard_url = environment.scorecard_url;

@Component({
  selector: 'ccda-validator-launcher',
  templateUrl: 'ccda-validator-launcher.component.html',
  styleUrls: ['ccda-validator-launcher.component.css']
})
export class CcdaValidatorLauncherComponent implements OnInit {
  public scorecard_url: string;
  constructor() {
    this.scorecard_url = scorecard_url;
  }

  ngOnInit() {
  }

}
