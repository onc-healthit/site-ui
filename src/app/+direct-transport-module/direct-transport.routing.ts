/**
 * Created by Brian on 10/17/2016.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DirectTransportLauncherComponent} from "./direct-transport-launcher/direct-transport-launcher.component";

const routes: Routes = [
  {
    path: '',
    component: DirectTransportLauncherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectTransportRoutingModule { }
