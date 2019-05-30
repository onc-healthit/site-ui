// The file contents for the current environment will overwrite these during build.
// The (dev) build system defaults to the old environment which uses `environment.ts`, but if you run
// `ng build --env=ahrq.dev` then `environment.ahrq.dev.ts` will be used instead.
// Since there is no AHRQ default, ng serve must specify the env as well.

export const environment = {
    production: false,
    trustanchor_upload_url: 'https://site.dev.sitenv.org/trustanchoruploader/uploadtrustanchor',
    trustbundle_download_url: 'https://site.dev.sitenv.org/trustanchoruploader/downloadtrustbundle',
    direct_send_precanned_message_url: 'https://site.dev.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfilepath',
    direct_send_uploaded_message_url: 'https://site.dev.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfile',
    site_direct_message_lookup_url: 'https://site.dev.sitenv.org/directtransportmessagesender/searchsiteinbox?fromAddress=',
    hhs_direct_message_lookup_url: 'https://site.dev.sitenv.org/directtransportmessagesender/searchhhsinbox?fromAddress=',
    xdr_send_precanned_message_url: 'https://site.dev.sitenv.org/xdrmessagesender/sendmessagewithattachmentfilepath',
    xdr_send_uploaded_message_url: 'https://site.dev.sitenv.org/xdrmessagesender/sendmessagewithattachmentfile',
    canned_ccda_filepaths_url: 'https://site.dev.sitenv.org/directtransportmessagesender/listsampleccdafiles',
    search_message_logs_by_from_address_url: 'https://site.dev.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://site.dev.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'https://site.dev.sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl',

    ccda_validation_url: 'https://james.dev.sitenv.org/referenceccdaservice/',
    scorecard_url: 'https://ccda.dev.sitenv.org/scorecard/',

    fhir_server_url: 'https://fhir.sitenv.org/secure/', // temporary URL
    fhir_query_url: 'https://fhir.dev.sitenv.org/fhirclient/',
    fhir_conformance_url: 'https://fhir.dev.sitenv.org/fhirconformance/',
    fhir_bulk_data_url: 'https://fhirtest.sitenv.org/bulkdataclient/',
    fhir_inferno_data_url: 'https://infernotest.sitenv.org' // temporary URL
};
