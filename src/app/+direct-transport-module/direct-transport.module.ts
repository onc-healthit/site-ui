import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../shared/shared.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {DirectTransportLauncherComponent} from "./direct-transport-launcher/direct-transport-launcher.component";
import {DirectTransportRoutingModule} from "./direct-transport.routing";
import {TrustAnchorExchangeComponent} from "app/+direct-transport-module/trustanchor-exchange-component/trustanchor-exchange.component";
import {TrustanchorUploadService} from "app/shared/trustanchor-upload.service";
import {DirectRecieveMessagesComponent} from "app/+direct-transport-module/direct-recieve-messages-component/direct-recieve-messages.component";
import {DirectSendMessageService} from "app/shared/direct-send-message.service";
import {DirectSendPrecannedMessagesComponent} from "app/+direct-transport-module/direct-send-precanned-messages-component/direct-send-precanned-messages.component";
import {DirectSendUploadedMessagesComponent} from "app/+direct-transport-module/direct-send-uploaded-messages-component/direct-send-uploaded-messages.component";

@NgModule({
  imports: [
    Ng2Bs3ModalModule,
    SharedModule,
    HttpModule,
    DirectTransportRoutingModule
  ],
  declarations: [
    DirectTransportLauncherComponent,
    TrustAnchorExchangeComponent,
    DirectRecieveMessagesComponent,
    DirectSendPrecannedMessagesComponent,
    DirectSendUploadedMessagesComponent
  ],
  providers: [
    TrustanchorUploadService,
    DirectSendMessageService
  ]
})
export class DirectTransportModule { }
