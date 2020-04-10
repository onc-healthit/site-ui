import {Component, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";

const scorecard_url = environment.scorecard_url;
const ett_url = environment.ett_url;
const host_url = environment.host_url;

@Component({
  selector: 'ccda-validator-launcher',
  templateUrl: 'ccda-validator-launcher.component.html',
  styleUrls: ['ccda-validator-launcher.component.css']
})
export class CcdaValidatorLauncherComponent implements OnInit {
  public scorecard_url: string;
  public ett_url: string;
  public host_url: string;
  inDebugMode = false; // ensure this is set to false for production

  constructor() {
    this.scorecard_url = scorecard_url;
    this.ett_url = ett_url;
    this.host_url = host_url;
  }

  ngOnInit() {
  }

}
