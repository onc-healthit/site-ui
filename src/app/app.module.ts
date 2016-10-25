import {NgModule} from "@angular/core";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SiteNavigationComponent} from "./site-navigation-component/site-navigation.component";
import {SiteAngularUiRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        SiteAngularUiRoutingModule,
        BrowserModule
    ],
    declarations: [
        SandboxLauncherComponent,
        SandboxCCDAComponent,
        SiteNavigationComponent
    ],
    bootstrap: [ SiteNavigationComponent ]
})
export class AppModule {
}
