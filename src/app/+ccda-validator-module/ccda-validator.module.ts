import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { CCDAValidatorService } from "../shared/ccda-validator.service";
import { CCDAValidatorRoutingModule } from "./ccda-validator.routing";
import { XmlHighlightComponent } from "./xml-highlight/xml-highlight.component";
import { ResultsListComponent } from "./results-list/results-list.component";
import { HighlightCcdaXmlResultDirective } from "./xml-highlight/highlight-ccda-xml-result.directive";
import { SharedModule } from "../shared/shared.module";
import { CcdaR1ValidatorComponent } from "./ccda-r1-validator-component/ccda-r1-validator.component";
import { CcdaValidatorReleaseNotesComponent } from "./ccda-validator-release-notes-component/ccda-validator-release-notes.component";
import { CcdaR2ValidatorComponent } from "./ccda-r2-validator-component/ccda-r2-validator.component";
import { CcdaR2CuresValidatorComponent } from "./ccda-r2-cures-validator-component/ccda-r2-cures-validator.component";
import { CcdaR2Svap2022ValidatorComponent } from "./ccda-r2-svap2022-validator-component/ccda-r2-svap2022-validator.component";
import { CcdaR2Svap2023ValidatorComponent } from "./ccda-r2-svap2023-validator-component/ccda-r2-svap2023-validator.component";
import { CcdaValidatorLauncherComponent } from "./ccda-validator-launcher/ccda-validator-launcher.component";
import { AccordionModule } from "ngx-accordion";
import { Angulartics2Module } from "angulartics2";

@NgModule({
  imports: [
    Ng2Bs3ModalModule,
    HttpModule,
    CCDAValidatorRoutingModule,
    SharedModule,
    AccordionModule,
    Angulartics2Module.forChild()
  ],
  exports: [
  ],
  declarations: [
    XmlHighlightComponent,
    ResultsListComponent,
    HighlightCcdaXmlResultDirective,
    CcdaR1ValidatorComponent,
    CcdaR2ValidatorComponent,
    CcdaR2CuresValidatorComponent,
    CcdaR2Svap2022ValidatorComponent,
    CcdaR2Svap2023ValidatorComponent,
    CcdaValidatorLauncherComponent,
    CcdaValidatorReleaseNotesComponent
  ],
  providers: [
    CCDAValidatorService
  ],
})

export class CCDAValidatorModule { }
