/**
 * Created by Brian on 9/25/2016.
 */
import {Component, OnInit, ViewChild, ElementRef, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {CCDAValidatorService} from "../shared/ccda-validator.service";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {EscapeHtmlService} from "../shared/EscapeHtmlService";
import {PageScrollService, PageScrollInstance, PageScrollConfig} from "ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";

const URL = 'https://devccda.sitenv.org/referenceccdaservice/';
declare var Prism: any;

@Component({
    selector: 'ccda-r2-validator',
    templateUrl: 'ccda-r2-validator.component.html',
    styleUrls: ['css/main.css']
})
export class CCDAR2ValidatorComponent implements OnInit {
    @ViewChild('resultsModal') modal: ModalComponent;
    @ViewChild('xmlHighlightedResults') xmlHighlightedResults : ElementRef;
    @ViewChild('groupedResults') groupedResults : ElementRef;

    private senderGitHubUrl = 'https://api.github.com/repos/siteadmin/2015-Certification-C-CDA-Test-Data/contents/Sender SUT Test Data';
    private receiverGitHubUrl = 'https://api.github.com/repos/siteadmin/2015-Certification-C-CDA-Test-Data/contents/Receiver SUT Test Data';
    public validationObjectives;
    public referenceFiles;
    public validationResults;
    public currentResultType;
    filesToUpload: Array<File>;
    validationObjective: string;
    referenceFileName: string;
    isValidating: boolean = false;
    errorCountMap: Map<string, number>;

    constructor(private http: Http,  private ccdaValidatorService:CCDAValidatorService, private escapeHtmlService:EscapeHtmlService, @Inject(DOCUMENT) private document: any, private pageScrollService: PageScrollService) {
        this.filesToUpload = [];
        this.validationObjective = '';
        this.referenceFileName = '';
        this.errorCountMap = new Map<string, number>();
        PageScrollConfig.defaultScrollOffset = 240;
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
        this.toggleValidating();
        this.ccdaValidatorService.validate(URL, this.referenceFileName, this.validationObjective, this.filesToUpload).then((result) => {
            this.validationResults = result;
            this.modal.open();
            this.toggleValidating();
        }, (error) => {
            console.error(error);
        });
    }

    getValidationClassFotType(validationResultType:string) : string{
        var typeEnding = validationResultType.split(" ").splice(-1)[0];
        var style;
        switch(typeEnding){
            case 'Error':
                style = "validation-error";
                break;
            case 'Warning':
                style = "validation-warning";
                break
            default:
                style = "validation-info"
                break;
        }
        return style;
    }

    toggleValidating() {
        this.isValidating = !this.isValidating;
    }

    highlightCCDAResults(){
        this.xmlHighlightedResults.nativeElement.innerHTML = '<pre class="line-numbers"><code class="language-markup">' + this.escapeHtmlService.escapeHtml(this.validationResults.resultsMetaData.ccdaFileContents) + '</code></pre>';
        Prism.highlightAll();
    }

    newResultType(resultType: string): boolean{
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

    public scrollInside(idToScrollTo) {
        var hyphenatedId = idToScrollTo.replace(/\s+/g, "-");
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInlineInstance(this.document, hyphenatedId, this.groupedResults.nativeElement);
        this.pageScrollService.start(pageScrollInstance);
    }

    public createNewResultHeading(index: number, currentType: string){
        return currentType == this.validationResults.ccdaValidationResults[index-1].type;
    }
}