/**
 * Created by Brian on 10/17/2016.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CCDAR2ValidatorComponent} from "./ccda-r2-validator.component";


const routes: Routes = [
    { path: '', component: CCDAR2ValidatorComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CCDAR2ValidatorRoutingModule { }