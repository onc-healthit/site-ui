/**
 * Created by Brian on 1/23/2017.
 */
import {Component, ViewChild, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {DirectSendMessageService} from "../../shared/direct-send-message.service";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {environment} from "../../../environments/environment";

const URL = environment.direct_send_precanned_message_url;
const CANNED_CCDA_FILEPATHS_URL = environment.canned_ccda_filepaths_url;

@Component({
    selector: 'direct-send-precanned-messages',
    templateUrl: 'direct-send-precanned-messages.component.html',
    styleUrls: ['direct-send-precanned-messages.component.css']
})
export class DirectSendPrecannedMessagesComponent implements OnInit {
    @ViewChild('blockModal') blockModal:ModalComponent;
    ccdaFilePath: string;
    toAddress: string;
    public precannedCcdaFilePaths;
    public sendMessageResult: any = {};

    constructor(private directSendMessageService:DirectSendMessageService, private http:Http){
        this.toAddress = '';
        this.ccdaFilePath = '';
    }

    onSubmit(form: any): void {
        this.blockModal.open().then(() => {
            this.directSendMessageService.sendMessageWithAttachmentFilePath(URL, this.toAddress, this.ccdaFilePath).then((result) => {
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