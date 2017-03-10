/**
 * Created by Brian on 10/17/2016.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DirectXdrLauncherComponent} from "./direct-xdr-launcher/direct-xdr-launcher.component";

const routes: Routes = [
  {
    path: '',
    component: DirectXdrLauncherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectXdrRoutingModule { }
