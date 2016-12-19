import {Component, OnInit, ViewChild} from "@angular/core";
import {CCDAValidatorService} from "../../shared/ccda-validator.service";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import {environment} from "../../../environments/environment";

const URL = environment.r1_url;

@Component({
  selector: 'ccda-r1-validator-component',
  templateUrl: 'ccda-r1-validator.component.html',
  styleUrls: ['ccda-r1-validator.component.css']
})
export class CcdaR1ValidatorComponent implements OnInit {
  @ViewChild('r1resultsModal') modal: ModalComponent;
  @ViewChild('blockModal') blockModal:ModalComponent;
  public validationResults;
  CCDA1_type_val: string;
  filesToUpload: Array<File>;

  constructor(private http: Http, private ccdaValidatorService:CCDAValidatorService) {
    this.filesToUpload = [];
    this.CCDA1_type_val = '';
    this.validationResults = new Object();
  }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  onSubmit(form: any): void {
    this.blockModal.open();
    this.ccdaValidatorService.validateR1(URL, this.CCDA1_type_val, this.filesToUpload).then((result) => {
      this.validationResults.ccdaValidationResults = this.buildValidationResults(result.ccdaResults);
      this.validationResults.resultsMetaData = this.buildValidationResultsMetaData(result.ccdaResults);
      this.blockModal.close();
      this.modal.open();
    }, (error) => {
      console.error(error);
      this.blockModal.close();
    });
  }

  private buildValidationResultsMetaData(data):any{
    var metadata :any = [];
    var errorMetadata = {
      type: '',
      count: 0
    };
    var warningMetaData = {
      type: '',
      count: 0
  };
    var infoMetaData = {
      type: '',
      count: 0
  };

    errorMetadata.type = 'C-CDA MDHT Conformance Error';
    errorMetadata.count = data.errors.length;
    metadata.push(errorMetadata);

    warningMetaData.type = 'C-CDA MDHT Conformance Warning';
    warningMetaData.count = data.warnings.length;
    metadata.push(warningMetaData);

    infoMetaData.type = 'C-CDA MDHT Conformance Info';
    infoMetaData.count = data.info.length;
    metadata.push(infoMetaData);
    var resultMetaDataString = {
      'resultMetaData': metadata
    }
    return resultMetaDataString;
  }

  private buildValidationResults(data):any{
    var resultsList :any = [];
    data.errors.forEach(function (result) {
      let ccdaValidationResults = {
        type: '',
        description: '',
        xPath: '',
        documentLineNumber: ''
      };
      ccdaValidationResults.type = 'C-CDA MDHT Conformance Error';
      ccdaValidationResults.description = result.message;
      ccdaValidationResults.xPath = result.path;
      ccdaValidationResults.documentLineNumber = result.lineNumber;
      resultsList.push(ccdaValidationResults);
    });

    data.warnings.forEach(function (result) {
      let ccdaValidationResults = {
        type: '',
        description: '',
        xPath: '',
        documentLineNumber: ''
      };
      ccdaValidationResults.type = 'C-CDA MDHT Conformance Warning';
      ccdaValidationResults.xPath = result.path;
      ccdaValidationResults.description = result.message;
      ccdaValidationResults.documentLineNumber = result.lineNumber;
      resultsList.push(ccdaValidationResults);
    });

    data.info.forEach(function (result) {
      let ccdaValidationResults = {
        type: '',
        description: '',
        xPath: '',
        documentLineNumber: ''
      };
      ccdaValidationResults.type = 'C-CDA MDHT Conformance Info';
      ccdaValidationResults.description = result.message;
      ccdaValidationResults.xPath = result.path;
      ccdaValidationResults.documentLineNumber = result.lineNumber;
      resultsList.push(ccdaValidationResults);
    });
    return resultsList;
  }
}
