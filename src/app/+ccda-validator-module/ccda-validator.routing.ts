/**
 * Created by Brian on 10/17/2016.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CcdaR1ValidatorComponent} from "./ccda-r1-validator-component/ccda-r1-validator.component";
import {CcdaR2ValidatorComponent} from "./ccda-r2-validator-component/ccda-r2-validator.component";
import {CcdaValidatorLauncherComponent} from "./ccda-validator-launcher/ccda-validator-launcher.component";


const routes: Routes = [
  {
    path: 'ccdar2validator',
    component: CcdaR2ValidatorComponent
  },
  {
    path: 'ccdar1validator',
    component: CcdaR1ValidatorComponent
  },
  {
    path: '',
    component: CcdaValidatorLauncherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CCDAValidatorRoutingModule { }
