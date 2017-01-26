/**
 * Created by Brian on 1/23/2017.
 */
import {Component, ViewChild} from "@angular/core";
import {DirectSendMessageService} from "app/shared/direct-send-message.service";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {environment} from "../../../environments/environment";

const URL = environment.direct_send_uploaded_message_url;

@Component({
    selector: 'direct-send-uploaded-messages',
    templateUrl: 'direct-send-uploaded-messages.component.html',
    styleUrls: ['direct-send-uploaded-messages.component.css']
})
export class DirectSendUploadedMessagesComponent{
    @ViewChild('blockModal') blockModal:ModalComponent;
    filesToUpload: Array<File>;
    toAddress: string;
    public sendMessageResult: any = {};

    constructor(private directSendMessageService:DirectSendMessageService){
        this.filesToUpload = [];
        this.toAddress = '';
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    onSubmit(form: any): void {
        this.blockModal.open().then(() => {
            this.directSendMessageService.sendMessageWithAttachmentFile(URL, this.toAddress, this.filesToUpload).then((result) => {
                this.sendMessageResult = result;
                this.blockModal.close();
            }).catch((err) => {
                this.blockModal.close();
                this.sendMessageResult.success = false;
                this.sendMessageResult.message = "System error while sending message."
                console.log(err);
            });;
        });
    }

    clearResults(){
        this.sendMessageResult = null;
    }
}