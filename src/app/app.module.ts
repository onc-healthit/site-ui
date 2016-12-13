import {NgModule} from "@angular/core";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SiteNavigationComponent} from "./site-navigation-component/site-navigation.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2PageScrollModule, PageScrollService} from "ng2-page-scroll";
import {SharedModule} from "./shared/shared.module";
import { SandboxQrdaCqmComponentComponent } from './sandbox-qrda-cqm-component/sandbox-qrda-cqm-component.component';
import {MarkdownModule} from 'angular2-markdown';
import { SiteNewsAnnouncementsComponent } from './site-news-announcements-component/site-news-announcements.component';
import { SiteFooterComponent } from './site-footer-component/site-footer.component';
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import { SiteReleaseNotesComponent } from './site-release-notes-component/site-release-notes.component';
import { SiteVersionComponent } from './site-version-component/site-version.component';
import { SiteNistToolsComponent } from './site-nist-tools-component/site-nist-tools.component';
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    MarkdownModule,
    Ng2Bs3ModalModule,
    Ng2PageScrollModule.forRoot()
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
    SiteNistToolsComponent
  ],
  providers: [
    PageScrollService
  ],
  bootstrap: [ SiteNavigationComponent, SiteFooterComponent]
})
export class AppModule {
}
