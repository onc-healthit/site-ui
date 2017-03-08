import {Component, OnInit, ViewChild} from "@angular/core";
import {CCDAValidatorService} from "../../shared/ccda-validator.service";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import {environment} from "../../../environments/environment";

const URL = environment.ccda_validation_url;
const REFERENCE_FILE_NAME = 'noscenariofile';

@Component({
  selector: 'ccda-r1-validator-component',
  templateUrl: 'ccda-r1-validator.component.html',
  styleUrls: ['ccda-r1-validator.component.css']
})
export class CcdaR1ValidatorComponent implements OnInit {
  @ViewChild('r1resultsModal') modal: ModalComponent;
  @ViewChild('blockModal') blockModal:ModalComponent;
  
  public validationResults: any;
  validationObjective: string;
  filesToUpload: Array<File>;

  constructor(private http: Http, private ccdaValidatorService:CCDAValidatorService) {
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
          this.ccdaValidatorService.validateCCDA(URL, REFERENCE_FILE_NAME, this.validationObjective, this.filesToUpload).then((result: any) => {
            this.validationResults = result;
            this.blockModal.close();
            this.modal.open();
          });
        });
  }

}
