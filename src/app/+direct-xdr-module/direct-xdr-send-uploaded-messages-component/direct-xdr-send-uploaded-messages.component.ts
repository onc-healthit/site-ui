/**
 * Created by Brian on 1/23/2017.
 */
import {Component, ViewChild} from "@angular/core";
import {DirectXdrSendMessageService} from "../../shared/direct-xdr-send-message.service";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {environment} from "../../../environments/environment";

const URL = environment.xdr_send_uploaded_message_url;

@Component({
    selector: 'direct-xdr-send-uploaded-messages',
    templateUrl: 'direct-xdr-send-uploaded-messages.component.html',
    styleUrls: ['direct-xdr-send-uploaded-messages.component.css']
})
export class DirectXdrSendUploadedMessagesComponent{
    @ViewChild('resultsModal') resultsModal: ModalComponent;
    @ViewChild('blockModal') blockModal:ModalComponent;
    filesToUpload: Array<File>;
    endpoint: string;
    directFromAddress: string;
    directToAddress: string;
    messageType: string;
    public sendMessageResult: any = {};

    constructor(private directXdrSendMessageService:DirectXdrSendMessageService){
        this.filesToUpload = [];
        this.endpoint = '';
        this.directFromAddress = '';
        this.directToAddress = '';
        this.messageType = 'minimal';
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    onSubmit(form: any): void {
        this.blockModal.open().then(() => {
            this.directXdrSendMessageService.sendMessageWithAttachmentFile(URL, this.endpoint, this.filesToUpload, this.directFromAddress, this.directToAddress, this.messageType).then((result) => {
                this.sendMessageResult = result;
                this.blockModal.close();
                this.resultsModal.open();
            }).catch((err) => {
                this.blockModal.close();
                this.sendMessageResult.success = false;
                this.sendMessageResult.message = "System error while sending message."
                console.log(err);
            });
        });
    }

    clearResults(){
        this.sendMessageResult = null;
    }
}