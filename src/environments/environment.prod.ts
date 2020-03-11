export const environment = {
    production: true,
    ccda_validation_url: 'https://james.healthit.gov/referenceccdaservice/',
    trustanchor_upload_url: 'https://site.healthit.gov/trustanchoruploader/uploadtrustanchor',
    trustbundle_download_url: 'https://site.healthit.gov/trustanchoruploader/downloadtrustbundle',
    direct_send_precanned_message_url: 'https://site.healthit.gov/directtransportmessagesender/sendmessagewithattachmentfilepath',
    direct_send_uploaded_message_url: 'https://site.healthit.gov/directtransportmessagesender/sendmessagewithattachmentfile',
    site_direct_message_lookup_url: 'https://site.healthit.gov/directtransportmessagesender/searchsiteinbox?fromAddress=',
    hhs_direct_message_lookup_url: 'https://site.healthit.gov/directtransportmessagesender/searchhhsinbox?fromAddress=',
    xdr_send_precanned_message_url: 'https://site.healthit.gov/xdrmessagesender/sendmessagewithattachmentfilepath',
    xdr_send_uploaded_message_url: 'https://site.healthit.gov/xdrmessagesender/sendmessagewithattachmentfile',
    canned_ccda_filepaths_url: 'https://site.healthit.gov/directtransportmessagesender/listsampleccdafiles',
    scorecard_url: 'https://healthit.gov/scorecard/',
    search_message_logs_by_from_address_url: 'https://site.healthit.gov/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://site.healthit.gov/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'http://site.healthit.gov/xdrmessagevalidator/Dispatcher/XDRService.wsdl',

    fhir_server_url: 'https://fhir.healthit.gov/secure/',
    fhir_query_url: 'https://fhir.healthit.gov/fhirclient/',
    fhir_conformance_url: 'https://fhir.healthit.gov/fhirconformance/',
    fhir_bulk_data_url: 'https://fhir.healthit.gov/bulkdataclient/',
    fhir_inferno_data_url: 'https://inferno.healthit.gov/'
};
