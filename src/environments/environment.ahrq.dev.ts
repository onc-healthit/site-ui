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
    search_message_logs_by_from_address_url: 'http://ccda.dev.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'http://ccda.dev.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'http://ccda.dev.sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl',
    ett_url: 'https://ett.dev.sitenv.org/ett',
    host_url: 'sitenv.org',

    ccda_validation_url: 'https://james.healthit.gov/referenceccdaservice/',
    ccda_r2_cures_validation_url: 'http://ccda.dev.sitenv.org/referenceccdaservice/',
    scorecard_url: 'http://ccda.dev.sitenv.org/scorecard/',
    jwt_accesstoken_endpoint: 'http://34.197.16.179/auth/realms/sitenv/protocol/openid-connect/token',
    jwt_accesstoken_client: 'siteui',

    fhir_server_url: 'https://fhir.dev.sitenv.org/secure/', // temporary URL
    fhir_query_url: 'https://fhir.dev.sitenv.org/fhirclient/',
    fhir_conformance_url: 'https://fhir.dev.sitenv.org/fhirconformance/',
    fhir_bulk_data_url: 'https://fhir.dev.sitenv.org/clientbulkr4',
    fhir_inferno_data_url: 'https://infernotest.sitenv.org' // temporary URL
};
