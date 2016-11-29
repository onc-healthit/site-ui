import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {CCDAR2ValidatorComponent} from "./ccda-r2-validator.component";
import {CCDAValidatorService} from "../shared/ccda-validator.service";
import {CCDAR2ValidatorRoutingModule} from "./ccda-r2-validator.routing";
import {CommonModule} from "@angular/common";
import {EscapeHtmlService} from "../shared/EscapeHtmlService";
import {HyphenateStringPipe} from "../shared/hyphenate-string.pipe";
import {EscapeHtmlPipe} from "../shared/escape-html.pipe";
import {PopoverModule} from "ng2-popover";

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
        EscapeHtmlPipe
    ],
    providers:[
        CCDAValidatorService,
        EscapeHtmlService
    ],
})

export class CCDAR2ValidatorModule{}