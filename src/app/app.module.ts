import {NgModule} from "@angular/core";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SiteNavigationComponent} from "./site-navigation-component/site-navigation.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2PageScrollModule, PageScrollService} from "ng2-page-scroll";
import {SharedModule} from "./shared/shared.module";
import { SandboxQrdaCqmComponentComponent } from './sandbox-qrda-cqm-component/sandbox-qrda-cqm-component.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    SandboxLauncherComponent,
    SandboxCCDAComponent,
    SiteNavigationComponent,
    SandboxQrdaCqmComponentComponent
  ],
  providers: [
    PageScrollService
  ],
  bootstrap: [ SiteNavigationComponent ]
})
export class AppModule {
}
