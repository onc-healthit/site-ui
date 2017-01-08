import {Component, OnInit, ViewChild} from "@angular/core";
import {CCDAValidatorService} from "../../shared/ccda-validator.service";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import {environment} from "../../../environments/environment";

const URL = environment.r2_url;

@Component({
  selector: 'ccda-r2-validator-component',
  templateUrl: 'ccda-r2-validator.component.html',
  styleUrls: ['ccda-r2-validator.component.css']
})
export class CcdaR2ValidatorComponent implements OnInit {
  @ViewChild('r2resultsModal') modal: ModalComponent;
  @ViewChild('blockModal') blockModal:ModalComponent;

  private senderGitHubUrl = 'https://api.github.com/repos/siteadmin/2015-Certification-C-CDA-Test-Data/contents/Sender SUT Test Data';
  private receiverGitHubUrl = 'https://api.github.com/repos/siteadmin/2015-Certification-C-CDA-Test-Data/contents/Receiver SUT Test Data';
  public validationObjectives;
  public referenceFiles;
  public validationResults;
  filesToUpload: Array<File>;
  validationObjective: string;
  referenceFileName: string;

  constructor(private http: Http, private ccdaValidatorService:CCDAValidatorService) {
    this.filesToUpload = [];
    this.validationObjective = '';
    this.referenceFileName = '';
  }

  ngOnInit() {
  }

  setSelectedMessageType(messageType: string){
    this.validationObjectives = [];
    this.referenceFiles = [];
    switch (messageType){
      case 'receiver':
        this.getValidationObjectivesForMessageType(this.receiverGitHubUrl);
        break;
      case 'sender':
        this.getValidationObjectivesForMessageType(this.senderGitHubUrl);
        break;
    };
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
    let obj = this.validationObjectives.find(x => x.name === objective);
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
          this.ccdaValidatorService.validateR2(URL, this.referenceFileName, this.validationObjective, this.filesToUpload).then((result) => {
            this.validationResults = result;
            this.blockModal.close();
            this.modal.open();
          });
        });
  }
}
