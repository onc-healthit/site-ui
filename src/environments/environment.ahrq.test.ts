// The file contents for the current environment will overwrite these during build.
// The (dev) build system defaults to the old environment which uses `environment.ts`, but if you run
// `ng build --env=ahrq.test` then `environment.ahrq.test.ts` will be used instead.
// Since there is no AHRQ default, ng serve must specify the env as well.

export const environment = {
    production: false,
    trustanchor_upload_url: 'https://site.test.sitenv.org/trustanchoruploader/uploadtrustanchor',
    trustbundle_download_url: 'https://site.test.sitenv.org/trustanchoruploader/downloadtrustbundle',
    direct_send_precanned_message_url: 'https://site.test.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfilepath',
    direct_send_uploaded_message_url: 'https://site.test.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfile',
    site_direct_message_lookup_url: 'https://site.test.sitenv.org/directtransportmessagesender/searchsiteinbox?fromAddress=',
    hhs_direct_message_lookup_url: 'https://site.test.sitenv.org/directtransportmessagesender/searchhhsinbox?fromAddress=',
    xdr_send_precanned_message_url: 'https://site.test.sitenv.org/xdrmessagesender/sendmessagewithattachmentfilepath',
    xdr_send_uploaded_message_url: 'https://site.test.sitenv.org/xdrmessagesender/sendmessagewithattachmentfile',
    canned_ccda_filepaths_url: 'https://site.test.sitenv.org/directtransportmessagesender/listsampleccdafiles',
    search_message_logs_by_from_address_url: 'https://site.test.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://site.test.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'https://site.test.sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl',

    ccda_validation_url: 'https://james.test.sitenv.org/referenceccdaservice/',
    ccda_r2_cures_validation_url: 'https://ccda.test.sitenv.org/referenceccdaservice/',
    scorecard_url: 'https://ccda.test.sitenv.org/scorecard/',

    fhir_server_url: 'https://fhir.test.sitenv.org/open/',
    fhir_query_url: 'https://fhir.test.sitenv.org/fhirclient/',
    fhir_conformance_url: 'https://fhir.test.sitenv.org/fhirconformance/',
    fhir_bulk_data_url: 'https://fhirtest.sitenv.org/bulkdataclient/',
    fhir_inferno_data_url: 'https://infernotest.sitenv.org' // temporary URL
};
