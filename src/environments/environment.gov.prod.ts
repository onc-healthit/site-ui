export const environment = {
    production: true,
    trustanchor_upload_url: 'https://site.healthit.gov/trustanchoruploader/uploadtrustanchor',
    trustbundle_download_url: 'https://site.healthit.gov/trustanchoruploader/downloadtrustbundle',
    direct_send_precanned_message_url: 'https://site.healthit.gov/directtransportmessagesender/sendmessagewithattachmentfilepath',
    direct_send_uploaded_message_url: 'https://site.healthit.gov/directtransportmessagesender/sendmessagewithattachmentfile',
    site_direct_message_lookup_url: 'https://site.healthit.gov/directtransportmessagesender/searchsiteinbox?fromAddress=',
    hhs_direct_message_lookup_url: 'https://site.healthit.gov/directtransportmessagesender/searchhhsinbox?fromAddress=',
    xdr_send_precanned_message_url: 'https://site.healthit.gov/xdrmessagesender/sendmessagewithattachmentfilepath',
    xdr_send_uploaded_message_url: 'https://site.healthit.gov/xdrmessagesender/sendmessagewithattachmentfile',
    canned_ccda_filepaths_url: 'https://site.healthit.gov/directtransportmessagesender/listsampleccdafiles',
    search_message_logs_by_from_address_url: 'https://ccda.healthit.gov/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://ccda.healthit.gov/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'http://ccda.healthit.gov/xdrmessagevalidator/Dispatcher/XDRService.wsdl',
    ett_url: 'https://ett.healthit.gov/ett',
    host_url: 'site.healthit.gov',

    ccda_validation_url: 'https://james.healthit.gov/referenceccdaservice/',
    ccda_r2_cures_validation_url: 'https://ccda.healthit.gov/referenceccdaservice/',
    scorecard_url: 'https://ccda.healthit.gov/scorecard/',
    jwt_accesstoken_endpoint: 'https://fhirsandbox.healthit.gov/auth/realms/healthit/protocol/openid-connect/token',
    jwt_accesstoken_client: 'siteui',
    
    fhir_server_url: 'https://fhirsandbox.healthit.gov/secure/r4',
    fhir_query_url: 'https://fhirsandbox.healthit.gov/fhirclient/',
    fhir_conformance_url: 'https://fhirsandbox.healthit.gov/fhirconformance/',
    fhir_bulk_data_url: 'https://fhirsandbox.healthit.gov/clientbulkr4',
    fhir_inferno_data_url: 'https://inferno.healthit.gov/'
};
