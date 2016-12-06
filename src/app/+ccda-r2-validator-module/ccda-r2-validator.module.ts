import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {CCDAR2ValidatorComponent} from "./ccda-r2-validator.component";
import {CCDAValidatorService} from "../shared/ccda-validator.service";
import {CCDAR2ValidatorRoutingModule} from "./ccda-r2-validator.routing";
import {CommonModule} from "@angular/common";
import {HyphenateStringPipe} from "../shared/hyphenate-string.pipe";
import {AppendStringNewlinePipe} from "../shared/append-string-newline.pipe";
import {EscapeHtmlPipe} from "../shared/escape-html.pipe";
import {PopoverModule} from "ng2-popover";
import {XmlHighlightComponent} from "./xml-highlight/xml-highlight.component";
import {ResultsListComponent} from "./results-list/results-list.component";
import {HighlightCcdaXmlResultDirective} from "./xml-highlight/highlight-ccda-xml-result.directive";

@NgModule({
    imports: [
        Ng2Bs3ModalModule,
        FormsModule,
        HttpModule,
        CCDAR2ValidatorRoutingModule,
        CommonModule,
        PopoverModule
    ],
    exports: [
        CCDAR2ValidatorComponent
    ],
    declarations: [
        CCDAR2ValidatorComponent,
        HyphenateStringPipe,
        EscapeHtmlPipe,
        AppendStringNewlinePipe,
        XmlHighlightComponent,
        ResultsListComponent,
        HighlightCcdaXmlResultDirective
    ],
    providers:[
        CCDAValidatorService
    ],
})

export class CCDAR2ValidatorModule{}