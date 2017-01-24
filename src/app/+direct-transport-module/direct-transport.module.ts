import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../shared/shared.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {DirectTransportLauncherComponent} from "./direct-transport-launcher/direct-transport-launcher.component";
import {DirectTransportRoutingModule} from "./direct-transport.routing";
import {TrustAnchorExchangeComponent} from "app/+direct-transport-module/trustanchor-exchange-component/trustanchor-exchange.component";
import {TrustanchorUploadService} from "app/shared/trustanchor-upload.service";

@NgModule({
  imports: [
    Ng2Bs3ModalModule,
    SharedModule,
    HttpModule,
    DirectTransportRoutingModule
  ],
  declarations: [
    DirectTransportLauncherComponent,
    TrustAnchorExchangeComponent
  ],
  providers: [
    TrustanchorUploadService
  ]
})
export class DirectTransportModule { }
