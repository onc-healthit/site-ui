import {Component, OnInit, Input, Inject, ViewChild, ElementRef} from "@angular/core";
import {PageScrollService, PageScrollInstance, PageScrollConfig} from "ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";

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
    var hyphenatedId = idToScrollTo.replace(/\s+/g, "-");
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInlineInstance(this.document, hyphenatedId, this.groupedResults.nativeElement);
    this.pageScrollService.start(pageScrollInstance);
  }

  public getValidationClassForType(validationResultType:string) : string{
    var typeEnding = validationResultType.split(" ").splice(-1)[0];
    var style;
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
}
