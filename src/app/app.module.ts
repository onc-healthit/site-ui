import {NgModule} from "@angular/core";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SiteNavigationComponent} from "./site-navigation-component/site-navigation.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2PageScrollModule, PageScrollService} from "ng2-page-scroll";
import {SharedModule} from "./shared/shared.module";
import {SandboxQrdaCqmComponentComponent} from "./sandbox-qrda-cqm-component/sandbox-qrda-cqm-component.component";
import {SiteNewsAnnouncementsComponent} from "./site-news-announcements-component/site-news-announcements.component";
import {SiteFooterComponent} from "./site-footer-component/site-footer.component";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {SiteReleaseNotesComponent} from "./site-release-notes-component/site-release-notes.component";
import {SiteVersionComponent} from "./site-version-component/site-version.component";
import {SiteNistToolsComponent} from "./site-nist-tools-component/site-nist-tools.component";
import {Angulartics2Module, Angulartics2GoogleAnalytics} from "angulartics2";
import {SiteHeaderComponent} from "./site-header-component/site-header-component";
import {SandboxDirectComponent} from "./sandbox-direct-component/sandbox-direct.component";
import {Ng2BreadcrumbModule} from "ng2-breadcrumb/ng2-breadcrumb";
import {HttpModule} from "@angular/http";
import {SandboxFhirComponent} from "./sandbox-fhir-component/sandbox-fhir.component";
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    Ng2Bs3ModalModule,
    HttpClientModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    Ng2BreadcrumbModule.forRoot(),
  ],
  declarations: [
    SandboxLauncherComponent,
    SandboxCCDAComponent,
    SiteNavigationComponent,
    SandboxQrdaCqmComponentComponent,
    SiteNewsAnnouncementsComponent,
    SiteFooterComponent,
    SiteReleaseNotesComponent,
    SiteVersionComponent,
    SiteNistToolsComponent,
    SiteHeaderComponent,
    SandboxDirectComponent,
    SandboxFhirComponent
  ],
  providers: [
    PageScrollService
  ],
  bootstrap: [ SiteNavigationComponent, SiteFooterComponent, SiteHeaderComponent]
})
export class AppModule {
}
