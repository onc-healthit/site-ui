/**
 * Created by Brian on 10/17/2016.
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CcdaR1ValidatorComponent } from "./ccda-r1-validator-component/ccda-r1-validator.component";
import { CcdaR2ValidatorComponent } from "./ccda-r2-validator-component/ccda-r2-validator.component";
import { CcdaR2CuresValidatorComponent } from "./ccda-r2-cures-validator-component/ccda-r2-cures-validator.component";
import { CcdaR2Svap2022ValidatorComponent } from "./ccda-r2-svap2022-validator-component/ccda-r2-svap2022-validator.component";
import { CcdaR2Svap2023ValidatorComponent } from "./ccda-r2-svap2023-validator-component/ccda-r2-svap2023-validator.component";
import { CcdaValidatorLauncherComponent } from "./ccda-validator-launcher/ccda-validator-launcher.component";


const routes: Routes = [
  {
    path: 'ccdar2svap2023validator',
    component: CcdaR2Svap2023ValidatorComponent
  },  
  {
    path: 'ccdar2svap2022validator',
    component: CcdaR2Svap2022ValidatorComponent
  },
  {
    path: 'ccdar2curesvalidator',
    component: CcdaR2CuresValidatorComponent
  },
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
