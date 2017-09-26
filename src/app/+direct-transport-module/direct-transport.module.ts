import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../shared/shared.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {DirectTransportLauncherComponent} from "./direct-transport-launcher/direct-transport-launcher.component";
import {DirectTransportRoutingModule} from "./direct-transport.routing";
import {TrustAnchorExchangeComponent} from "./trustanchor-exchange-component/trustanchor-exchange.component";
import {TrustanchorUploadService} from "../shared/trustanchor-upload.service";
import {DirectRecieveMessagesComponent} from "./direct-recieve-messages-component/direct-recieve-messages.component";
import {DirectSendMessageService} from "../shared/direct-send-message.service";
import {DirectSendPrecannedMessagesComponent} from "./direct-send-precanned-messages-component/direct-send-precanned-messages.component";
import {DirectSendUploadedMessagesComponent} from "./direct-send-uploaded-messages-component/direct-send-uploaded-messages.component";
import {AccordionModule} from "ngx-accordion";

@NgModule({
  imports: [
    Ng2Bs3ModalModule,
    SharedModule,
    HttpModule,
    DirectTransportRoutingModule,
      AccordionModule
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
