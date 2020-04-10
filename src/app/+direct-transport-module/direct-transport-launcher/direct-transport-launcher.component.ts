import {Component, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";

const host_url = environment.host_url;

@Component({
  selector: 'direct-transport-launcher',
  templateUrl: 'direct-transport-launcher.component.html',
  styleUrls: ['direct-transport-launcher.component.css']
})
export class DirectTransportLauncherComponent implements OnInit {
  public host_url: string;

  constructor() {
    this.host_url = host_url;

  }

  ngOnInit() {
  }

  getCertificate(){
    
  }

}
