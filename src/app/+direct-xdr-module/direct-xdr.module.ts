import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../shared/shared.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {DirectXdrLauncherComponent} from "./direct-xdr-launcher/direct-xdr-launcher.component";
import {DirectXdrRoutingModule} from "./direct-xdr.routing";
import {DirectXdrSendMessageService} from "../shared/direct-xdr-send-message.service";
import {DirectXdrSendPrecannedMessagesComponent} from "./direct-xdr-send-precanned-messages-component/direct-xdr-send-precanned-messages.component";
import {DirectXdrSendUploadedMessagesComponent} from "./direct-xdr-send-uploaded-messages-component/direct-xdr-send-uploaded-messages.component";
import {AccordionModule} from "ngx-accordion";

@NgModule({
  imports: [
    Ng2Bs3ModalModule,
    SharedModule,
    HttpModule,
    DirectXdrRoutingModule,
    AccordionModule
  ],
  declarations: [
    DirectXdrLauncherComponent,
    DirectXdrSendPrecannedMessagesComponent,
    DirectXdrSendUploadedMessagesComponent
  ],
  providers: [
    DirectXdrSendMessageService
  ]
})
export class DirectXdrModule { }
