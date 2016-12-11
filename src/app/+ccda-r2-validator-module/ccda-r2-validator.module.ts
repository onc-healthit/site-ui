import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {CCDAR2ValidatorComponent} from "./ccda-r2-validator.component";
import {CCDAValidatorService} from "../shared/ccda-validator.service";
import {CCDAR2ValidatorRoutingModule} from "./ccda-r2-validator.routing";
import {PopoverModule} from "ng2-popover";
import {XmlHighlightComponent} from "./xml-highlight/xml-highlight.component";
import {ResultsListComponent} from "./results-list/results-list.component";
import {HighlightCcdaXmlResultDirective} from "./xml-highlight/highlight-ccda-xml-result.directive";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        Ng2Bs3ModalModule,
        HttpModule,
        CCDAR2ValidatorRoutingModule,
        PopoverModule,
        SharedModule
    ],
    exports: [
        CCDAR2ValidatorComponent
    ],
    declarations: [
        CCDAR2ValidatorComponent,
        XmlHighlightComponent,
        ResultsListComponent,
        HighlightCcdaXmlResultDirective
    ],
    providers:[
        CCDAValidatorService
    ],
})

export class CCDAR2ValidatorModule{}
