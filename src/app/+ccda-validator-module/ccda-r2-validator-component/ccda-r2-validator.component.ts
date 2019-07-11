import {Component, OnInit, ViewChild, Input} from "@angular/core";
import {CCDAValidatorService} from "../../shared/ccda-validator.service";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import {environment} from "../../../environments/environment";

const URL = environment.ccda_validation_url;
const DEBUG_JSON_PATH = '/assets/jsonResults/refVal/r2/NT_CCDS_Sample1_r21_v4.json';
const INFO_INDEX: number = 0;

@Component({
  selector: 'ccda-r2-validator-component',
  templateUrl: 'ccda-r2-validator.component.html',
  styleUrls: ['ccda-r2-validator.component.css']
})
export class CcdaR2ValidatorComponent implements OnInit {
  @ViewChild('r2resultsModal') modal: ModalComponent;
  @ViewChild('blockModal') blockModal:ModalComponent;
  @Input() inDebugMode: boolean;

  private senderGitHubUrl = 'https://api.github.com/repos/siteadmin/2015-Certification-C-CDA-Test-Data/contents/Sender SUT Test Data';
  private receiverGitHubUrl = 'https://api.github.com/repos/siteadmin/2015-Certification-C-CDA-Test-Data/contents/Receiver SUT Test Data';
  public validationObjectives: any;
  public referenceFiles: any;
  public severityLevels: Array<any> =
    [ {value: 'INFO', displayName: 'Errors, Warnings, and Info'},
      {value: 'WARNING', displayName: 'Errors and Warnings only'},
      {value: 'ERROR', displayName: 'Errors only'} ];
  // set default to INFO - then dynamically updated via the model/selection
  severityLevelSelected: string = this.severityLevels[INFO_INDEX].value;
  public validationResults: any;
  filesToUpload: Array<File>;
  validationObjective: string;
  referenceFileName: string;

  canSave = true;

  constructor(private http: Http, private ccdaValidatorService:CCDAValidatorService) {
    this.filesToUpload = [];
    this.validationObjective = '';
    this.referenceFileName = '';
  }

  ngOnInit() {

  }

  setSelectedMessageType(messageType: string, event: any){
    event.preventDefault();
    this.validationObjectives = [];
    this.referenceFiles = [];
    switch (messageType){
      case 'receiver':
        this.getValidationObjectivesForMessageType(this.receiverGitHubUrl);
        break;
      case 'sender':
        this.getValidationObjectivesForMessageType(this.senderGitHubUrl);
        break;
    }
  }

  getValidationObjectivesForMessageType (objectivesUrl: string) {
    return this.http.get(objectivesUrl).map(response => response.json()).publishReplay(1).refCount().subscribe(
        data => {
          this.validationObjectives = data
        },
        err => console.error('There was an error: ' + err),
        () => console.log('done getting options')
    );
  }

  getReferenceFilesForValidationObjective(objective: string) {
    let obj = this.validationObjectives.find((x: any) => x.name === objective);
    return this.http.get(obj.url).map(response => response.json()).publishReplay(1).refCount().subscribe(
        data => {
          this.referenceFiles = data
        },
        err => console.error('There was an error: ' + err),
        () => console.log('done getting options')
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  onSubmit(form: any): void {
    this.blockModal.open().then(() => {
          this.ccdaValidatorService.validateCCDA(URL, this.referenceFileName, this.validationObjective,
            this.filesToUpload, this.severityLevelSelected).then((result: any) => {
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
