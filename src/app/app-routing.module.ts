import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SandboxDirectComponent} from "./sandbox-direct-component/sandbox-direct.component";
import {SandboxQrdaCqmComponentComponent} from "./sandbox-qrda-cqm-component/sandbox-qrda-cqm-component.component";
import {SiteNistToolsComponent} from "./site-nist-tools-component/site-nist-tools.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: SandboxLauncherComponent
  },
  {
    path: 'sandbox-ccda',
    component: SandboxCCDAComponent
  },
  {
    path: 'sandbox-direct',
    component: SandboxDirectComponent
  },
  {
    path: 'sandbox-qrm-cqm',
    component: SandboxQrdaCqmComponentComponent
  },
  {
    path: 'sandbox-ccda/ccda-validator',
    loadChildren: './+ccda-validator-module/ccda-validator.module#CCDAValidatorModule'
  },
  {
    path: 'sandbox-direct/directtransport',
    loadChildren: './+direct-transport-module/direct-transport.module#DirectTransportModule'
  },
  {
    path: 'test-tools',
    component: SiteNistToolsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }