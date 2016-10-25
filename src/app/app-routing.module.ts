import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";

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
    path: 'sandbox-ccda/ccda-r2-validator',
    loadChildren: 'app/+ccda-r2-validator-module/ccda-r2-validator.module#CCDAR2ValidatorModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class SiteAngularUiRoutingModule { }
