// The file contents for the current environment will overwrite these during build.
// The (prod) build system defaults to the old environment which uses `environment.prod.ts`, but if you run
// `ng build --env=ahrq.prod --prod` then `environment.ahrq.prod.ts` will be used instead.
// Since there is no AHRQ default, ng serve must specify the env as well.

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
    search_message_logs_by_from_address_url: 'https://site.healthit.gov/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://site.healthit.gov/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'https://site.healthit.gov/xdrmessagevalidator/Dispatcher/XDRService.wsdl',

    ccda_validation_url: 'https://james.site.healthit.gov/referenceccdaservice/',
    scorecard_url: 'https://ccda.site.healthit.gov/scorecard/',

    fhir_server_url: 'https://fhir.site.healthit.gov/open/',
    fhir_query_url: 'https://fhir.site.healthit.gov/fhirclient/',
    fhir_conformance_url: 'https://fhir.site.healthit.gov/fhirconformance/',
    fhir_bulk_data_url: 'https://fhir.site.healthit.gov/bulkdataclient/',
    fhir_inferno_data_url: 'https://inferno.healthit.gov/'
};
