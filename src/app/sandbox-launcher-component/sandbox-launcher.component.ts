/**
 * Created by Brian on 9/20/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

const fhir_url = environment.fhir_url;

@Component({
  selector: 'site-sandbox-launcher',
  styleUrls: ['sandbox-launcher.component.css'],
  templateUrl: 'sandbox-launcher.component.html'
})

export class SandboxLauncherComponent implements OnInit {
  public fhir_url:string;

  constructor(private router: Router) {
    this.fhir_url = fhir_url;
  }

  ngOnInit(): void {
  }
}

