/**
 * Created by Brian on 1/23/2017.
 */
import {Component, ViewChild, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {DirectXdrSendMessageService} from "../../shared/direct-xdr-send-message.service";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {environment} from "../../../environments/environment";

const URL = environment.xdr_send_precanned_message_url;
const CANNED_CCDA_FILEPATHS_URL = environment.canned_ccda_filepaths_url;

@Component({
    selector: 'direct-xdr-send-precanned-messages',
    templateUrl: 'direct-xdr-send-precanned-messages.component.html',
    styleUrls: ['direct-xdr-send-precanned-messages.component.css']
})
export class DirectXdrSendPrecannedMessagesComponent implements OnInit {
    @ViewChild('resultsModal') resultsModal: ModalComponent;
    @ViewChild('blockModal') blockModal:ModalComponent;
    ccdaFilePath: string;
    endpoint: string;
    directFromAddress: string;
    directToAddress: string;
    messageType: string;
    public precannedCcdaFilePaths;
    public sendMessageResult: any = {};

    constructor(private directXdrSendMessageService:DirectXdrSendMessageService, private http:Http){
        this.endpoint = '';
        this.ccdaFilePath = '';
        this.directFromAddress = '';
        this.directToAddress = '';
        this.messageType = 'minimal';
    }

    onSubmit(form: any): void {
        this.blockModal.open().then(() => {
            this.directXdrSendMessageService.sendMessageWithAttachmentFilePath(URL, this.endpoint, this.ccdaFilePath, this.directFromAddress, this.directToAddress, this.messageType).then((result) => {
                this.sendMessageResult = result;
                this.blockModal.close();
                this.resultsModal.open();
            }).catch((err) => {
                this.blockModal.close();
                this.sendMessageResult.success = false;
                this.sendMessageResult.message = "System error while sending message."
                console.log(err);
            });;
        });
    }

    ngOnInit() {
        this.getPrecannedCcdaFilePathsList();
    }

    clearResults(){
        this.sendMessageResult = null;
    }

    public getPrecannedCcdaFilePathsList(){
        return this.http.get(CANNED_CCDA_FILEPATHS_URL).map(response => response.json()).subscribe(
            data => {
                this.precannedCcdaFilePaths = data
            },
            err => console.error('There was an error: ' + err)
        );
    }
}