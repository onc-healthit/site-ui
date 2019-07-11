import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {CCDAValidatorService} from "../../shared/ccda-validator.service";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/publishReplay";
import {environment} from "../../../environments/environment";

const URL = environment.ccda_validation_url;
const REFERENCE_FILE_NAME = 'noscenariofile';
const DEBUG_JSON_PATH = '/assets//jsonResults/refVal/r1/NT_Bad_AllergyConcernElements_r11_v3.json';
const DEFAULT_SEVERITY_LEVEL = 'INFO';

@Component({
  selector: 'ccda-r1-validator-component',
  templateUrl: 'ccda-r1-validator.component.html',
  styleUrls: ['ccda-r1-validator.component.css']
})
export class CcdaR1ValidatorComponent implements OnInit {
  @ViewChild('r1resultsModal') modal: ModalComponent;
  @ViewChild('blockModal') blockModal: ModalComponent;
  @Input() inDebugMode: boolean;

  public validationResults: any;
  validationObjective: string;
  filesToUpload: Array<File>;
  canSave = true;

  constructor(private http: Http, private ccdaValidatorService: CCDAValidatorService) {
    this.filesToUpload = [];
    this.validationObjective = '';
  }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  onSubmit(form: any): void {
    this.blockModal.open().then(() => {
      this.ccdaValidatorService.validateCCDA(URL, REFERENCE_FILE_NAME, this.validationObjective, this.filesToUpload,
        DEFAULT_SEVERITY_LEVEL).then((result: any) => {
        this.validationResults = result;
        this.blockModal.close();
        this.modal.open();
      });
    });
  }

  loadDebugResults(): void {
    this.blockModal.open().then(() => {
      this.ccdaValidatorService.getLocalJsonResults(DEBUG_JSON_PATH, this.http)
        .subscribe(data => this.validationResults = data, error => console.log(error));
      this.blockModal.close();
      this.modal.open();
    });
  }

  saveResults(): void {
    this.ccdaValidatorService.saveResults();
  }
}
