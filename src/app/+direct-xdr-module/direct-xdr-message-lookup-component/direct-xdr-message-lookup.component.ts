import {Component, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";
const SEARCH_MESSAGE_LOG_URL = environment.search_message_logs_by_from_address_url;
const SITE_XDR_ENDPOINT = environment.site_xdr_wsdl_url;

@Component({
    selector: 'direct-xdr-message-lookup',
    templateUrl: 'direct-xdr-message-lookup.component.html',
    styleUrls: ['direct-xdr-message-lookup.component.css']
})
export class DirectXdrMessageLookupComponent{
    @ViewChild('resultsModal') resultsModal: ModalComponent;
    @ViewChild('blockModal') blockModal:ModalComponent;
    public lookupKey: string;
    public searchResults: any;
    public siteXdrEndpoint: string;
    
    constructor(private http: Http){
        this.siteXdrEndpoint = SITE_XDR_ENDPOINT;
        this.lookupKey = '';
    }

    onSubmit(form: any): void {
        let _lookup = this.lookupKey;
        this.blockModal.open().then(() => {
            return this.http.get(SEARCH_MESSAGE_LOG_URL + _lookup).map(response => response.json()).subscribe(
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