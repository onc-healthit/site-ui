import {Component, Input, OnInit, ViewChild, ElementRef} from "@angular/core";

declare var $:any;
@Component({
    selector: 'xml-highlight',
    templateUrl: './xml-highlight.component.html',
    styleUrls: ['./xml-highlight.component.css']
})
export class XmlHighlightComponent implements OnInit {
    @Input() ccdaxml: string;
    @Input() validationResults: any;
    @ViewChild('xmlHighlightedResults') xmlHighlightedResults : ElementRef;
    public splitXml: any;
    public lines: string;
    private resultsMap: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.ccdaxml != null) {
            this.splitXml = this.ccdaxml.split(/\r\n|\r|\n/);
            this.resultsMap = this.buildCcdaResultMap(this.validationResults);
        }
    }

    public hasResult(line:number): boolean{
       return this.resultsMap[line] != null;
    }

    public lineHasErrors(lineNumber:number): boolean{
        let resultTypesMap = this.resultsMap[lineNumber];
        if (resultTypesMap != null) {
            for (let resultType in resultTypesMap) {
                if (resultType.toLowerCase().indexOf("error") >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

    public lineHasWarnings(lineNumber:number): boolean{
        let resultTypesMap = this.resultsMap[lineNumber];
        if (resultTypesMap != null) {
            for (let resultType in resultTypesMap) {
                if (resultType.toLowerCase().indexOf("warn") >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

    public lineHasInfos(lineNumber:number): boolean{
        let resultTypesMap = this.resultsMap[lineNumber];
        if (resultTypesMap != null) {
            for (let resultType in resultTypesMap) {
                if (resultType.toLowerCase().indexOf("info") >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

    public highlightLine(lineNumber:number): string{
        let cssClass = "";
        let resultTypesMap = this.resultsMap[lineNumber];
        if (resultTypesMap != null) {
            for (let resultType in resultTypesMap) {
                if (resultType.toLowerCase().indexOf("error") >= 0) {
                    cssClass = "ccdaErrorHighlight";
                } else if (resultType.toLowerCase().indexOf("warn") >= 0) {
                    if (cssClass != "ccdaErrorHighlight") {
                        cssClass = "ccdaWarningHighlight";
                    }
                } else if (resultType.toLowerCase().indexOf("info") >= 0) {
                    if (cssClass != "ccdaWarningHighlight" || cssClass != "ccdaErrorHighlight") {
                        cssClass = "ccdaInfoHighlight";
                    }
                } else {
                    cssClass = "";
                }
            }
        }
        return cssClass;
    }

    public getResultsForLineNumber(line:number): any{
        return this.resultsMap[line];
    }

    private buildCcdaResultMap(results){
        var ccdaValidationResultsMap = {};
        var resultTypeMapValue = '';
        for (let result of results){
            if(result.expectedValueSet != null){
                resultTypeMapValue = result.description + '<br/>Expected Valueset(s): ' + result.expectedValueSet.replace(/,/g , " or ");
            }else{
                resultTypeMapValue = result.description;
            }
            if(ccdaValidationResultsMap[result.documentLineNumber] != undefined){
                let resultTypeMap = ccdaValidationResultsMap[result.documentLineNumber];
                if(resultTypeMap[result.type] != undefined){
                    resultTypeMap[result.type].push(resultTypeMapValue);
                    ccdaValidationResultsMap[result.documentLineNumber] = resultTypeMap;
                }else{
                    resultTypeMap[result.type] = [resultTypeMapValue];
                    ccdaValidationResultsMap[result.documentLineNumber] = resultTypeMap;
                }
            }else{
                let ccdaTypeMap = {};
                ccdaTypeMap[result.type] = [resultTypeMapValue];
                ccdaValidationResultsMap[result.documentLineNumber] = ccdaTypeMap;
            }
        }
        return ccdaValidationResultsMap;
    }
}
