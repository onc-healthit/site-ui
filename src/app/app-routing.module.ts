import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SandboxLauncherComponent} from "./sandbox-launcher-component/sandbox-launcher.component";
import {SandboxCCDAComponent} from "./sandbox-ccda-component/sandbox-ccda.component";
import {SandboxQrdaCqmComponentComponent} from "./sandbox-qrda-cqm-component/sandbox-qrda-cqm-component.component";

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
    path: 'sandbox-qrm-cqm',
    component: SandboxQrdaCqmComponentComponent
  },
  {
    path: 'sandbox-ccda/ccda-validator',
    loadChildren: 'app/+ccda-validator-module/ccda-validator.module#CCDAValidatorModule'
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
export class AppRoutingModule { }
