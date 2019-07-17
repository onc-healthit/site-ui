import {Component, OnInit, Input, Inject, ViewChild, ElementRef} from "@angular/core";
import {PageScrollService, PageScrollInstance, PageScrollConfig} from "ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";

const R1_OBJECTIVES = ['NonSpecificCCDA', 'TransitionsOfCareAmbulatorySummary', 'ClinicalOfficeVisitSummary',
    'TransitionsOfCareInpatientSummary', 'VDTAmbulatorySummary', 'VDTInpatientSummary'];
const LIMIT_RESULTS_MESSAGE = '0: *Limited to ';
const LIMIT_RESULTS_MESSAGE_ENDING = 'by user request';

@Component({
    selector: 'results-list',
    templateUrl: './results-list.component.html',
    styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
    @Input() validationResults: any;
    @ViewChild('groupedResults') groupedResults : ElementRef;
    private currentResultType: string = "";

    constructor(@Inject(DOCUMENT) private document: any, private pageScrollService: PageScrollService) {
        PageScrollConfig.defaultScrollOffset = 240;
    }

    ngOnInit() {
    }

    public scrollInside(idToScrollTo: string) {
        let hyphenatedId = idToScrollTo.replace(/\s+/g, "-");
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInlineInstance(this.document, hyphenatedId,
          this.groupedResults.nativeElement);
        this.pageScrollService.start(pageScrollInstance);
    }

    public getValidationClassForType(validationResultType:string) : string{
        let typeEnding = validationResultType.split(" ").splice(-1)[0];
        let style;
        switch(typeEnding){
            case 'Error':
                style = "alert-danger";
                break;
            case 'Warning':
                style = "alert-warning";
                break;
            default:
                style = "alert-info";
                break;
        }
        return style;
    }

    public calculateCurrentResultTypeCount(curResultMetaData: any): any {
      if (curResultMetaData) {
        if (curResultMetaData.count === 0) {
          if (this.validationResults) {
            let resultTypeSeverity = curResultMetaData.type.split(" ").splice(-1)[0].toUpperCase();
            let severityLevelSet = this.validationResults.resultsMetaData.severityLevel;
            if (severityLevelSet) {
              if (severityLevelSet === 'ERROR') {
                if (resultTypeSeverity === 'WARNING' || resultTypeSeverity === 'INFO') {
                  return LIMIT_RESULTS_MESSAGE + 'Errors only ' + LIMIT_RESULTS_MESSAGE_ENDING;
                }
              } else if (severityLevelSet === 'WARNING') {
                if (resultTypeSeverity === 'INFO') {
                  return LIMIT_RESULTS_MESSAGE + 'Warnings and Errors only ' + LIMIT_RESULTS_MESSAGE_ENDING;
                }
              } else {
                return 0;
              }
            }
          }
        }
      }
      return curResultMetaData.count;
    }

    public newResultType(resultType: string): boolean{
        if (this.currentResultType == ''){
            this.currentResultType = resultType;
            return true;
        }

        if (this.currentResultType == resultType){
            return false;
        }else{
            this.currentResultType = resultType;
            return true;
        }
    }

    public displayMDHTResultsOnly(): boolean{
        if(this.validationResults) {
            let validationObjectiveSelected = this.validationResults.resultsMetaData.objectiveProvided;
            if(validationObjectiveSelected) {
                for(var curObj of R1_OBJECTIVES) {
                    if(curObj === validationObjectiveSelected) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

}
