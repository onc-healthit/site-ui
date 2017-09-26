/**
 * Created by Brian on 1/23/2017.
 */
import {Component, Input, ViewChild} from "@angular/core";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {environment} from "environments/environment";

const SITE_MESSAGE_SEARCH_URL = environment.site_direct_message_lookup_url;
const HHS_MESSAGE_SEARCH_URL = environment.hhs_direct_message_lookup_url;
const TEST_ENDPOINT = 'Provider1@direct.sitenv.org';
const PROD_ENDPOINT = 'interop@direct.hhs.gov';

@Component({
    selector: 'direct-recieve-messages-component',
    templateUrl: 'direct-recieve-messages.component.html',
    styleUrls: ['direct-recieve-messages.component.css']
})
export class DirectRecieveMessagesComponent{
    @ViewChild('resultsModal') resultsModal: ModalComponent;
    @ViewChild('blockModal') blockModal:ModalComponent;
    @Input() title:string;
    @Input() description:string;
    @Input() endpoint:string;
    public lookupKey: string;
    public searchResults: any;

    constructor(private http: Http){
        this.lookupKey = '';
    }


    onSubmit(form: any): void {
        let _lookup = this.lookupKey;
        let _endpoint = this.endpoint;
        let _url = '';
        if (_endpoint === 'provider1@direct.sitenv.org'){
            _url = SITE_MESSAGE_SEARCH_URL;
        }else{
            _url = HHS_MESSAGE_SEARCH_URL;
        }
        this.blockModal.open().then(() => {
            return this.http.get(_url + _lookup).map(response => response.json()).subscribe(
                data => {
                    this.searchResults = data;
                    this.blockModal.close();
                    this.resultsModal.open();
                },
                err => {
                    console.error('There was an error: ' + err);
                    this.blockModal.close();
                }
            );
        })
    }
}