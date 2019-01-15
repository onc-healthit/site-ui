// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    // ccda_validation_url: 'https://ttpdstest.sitenv.org:8443/referenceccdaservice/',
    ccda_validation_url: 'https://james.dev.sitenv.org/referenceccdaservice/',
    scorecard_url: 'https://34.236.48.201/scorecard/', // this is AHRQ  TEST vs DEV for now (https://ccda.test.sitenv.org/scorecard/ vs https://ccda.dev.sitenv.org/scorecard/)
    trustanchor_upload_url: 'https://devccda.sitenv.org/trustanchoruploader/uploadtrustanchor',
    trustbundle_download_url: 'https://devccda.sitenv.org/trustanchoruploader/downloadtrustbundle',
    direct_send_precanned_message_url: 'http://localhost:8080/directtransportmessagesender/sendmessagewithattachmentfilepath',
    direct_send_uploaded_message_url: 'http://localhost:8080/directtransportmessagesender/sendmessagewithattachmentfile',
    site_direct_message_lookup_url: 'http://localhost:8080/directtransportmessagesender/searchsiteinbox?fromAddress=',
    hhs_direct_message_lookup_url: 'http://localhost:8080/directtransportmessagesender/searchhhsinbox?fromAddress=',
    xdr_send_precanned_message_url: 'https://devccda.sitenv.org/xdrmessagesender/sendmessagewithattachmentfilepath',
    xdr_send_uploaded_message_url: 'https://devccda.sitenv.org/xdrmessagesender/sendmessagewithattachmentfile',
    canned_ccda_filepaths_url: 'https://devccda.sitenv.org/directtransportmessagesender/listsampleccdafiles',
    search_message_logs_by_from_address_url: 'https://devccda.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://devccda.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'http://devccda.sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl',

    fhir_server_url: 'https://fhir.dev.sitenv.org/open/',
    fhir_query_url: 'https://fhir.dev.sitenv.org/fhirclient/',
    fhir_conformance_url: 'https://fhir.dev.sitenv.org/fhirconformance/',
    fhir_bulk_data_url: 'https://fhirtest.sitenv.org/bulkdataclient/',
    fhir_inferno_data_url: 'https://infernotest.sitenv.org' // temporary URL
};
