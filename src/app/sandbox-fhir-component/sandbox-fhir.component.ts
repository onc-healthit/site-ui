import {Component, OnInit} from "@angular/core";
import {environment} from "../../environments/environment";

const fhir_server_url = environment.fhir_server_url;
const fhir_query_url = environment.fhir_query_url;
const fhir_conformance_url = environment.fhir_conformance_url;

@Component({
  selector: 'sandbox-fhir-component',
  templateUrl: './sandbox-fhir.component.html'
})
export class SandboxFhirComponent implements OnInit {
  private fhir_server_url: string;
  private fhir_query_url: string;
  private fhir_conformance_url: string;

  constructor() {
    this.fhir_server_url = fhir_server_url;
    this.fhir_query_url = fhir_query_url;
    this.fhir_conformance_url = fhir_conformance_url;
  }

  ngOnInit() {
  }

}
