import {NgModule} from "@angular/core";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SiteNavigationComponent} from "./site-navigation-component/site-navigation.component";
import {SiteAngularUiRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2PageScrollModule, PageScrollService} from "ng2-page-scroll";

@NgModule({
    imports: [
        SiteAngularUiRoutingModule,
        BrowserModule,
        Ng2PageScrollModule.forRoot()
    ],
    declarations: [
        SandboxLauncherComponent,
        SandboxCCDAComponent,
        SiteNavigationComponent
    ],
    providers: [
        PageScrollService
    ],
    bootstrap: [ SiteNavigationComponent ]
})
export class AppModule {
}
