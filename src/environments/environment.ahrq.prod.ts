// The file contents for the current environment will overwrite these during build.
// The (prod) build system defaults to the old environment which uses `environment.prod.ts`, but if you run
// `ng build --env=ahrq.prod --prod` then `environment.ahrq.prod.ts` will be used instead.
// Since there is no AHRQ default, ng serve must specify the env as well.

export const environment = {
    production: true,
    trustanchor_upload_url: 'https://sitenv.org/trustanchoruploader/uploadtrustanchor',
    trustbundle_download_url: 'https://sitenv.org/trustanchoruploader/downloadtrustbundle',
    direct_send_precanned_message_url: 'https://sitenv.org/directtransportmessagesender/sendmessagewithattachmentfilepath',
    direct_send_uploaded_message_url: 'https://sitenv.org/directtransportmessagesender/sendmessagewithattachmentfile',
    site_direct_message_lookup_url: 'https://sitenv.org/directtransportmessagesender/searchsiteinbox?fromAddress=',
    hhs_direct_message_lookup_url: 'https://sitenv.org/directtransportmessagesender/searchhhsinbox?fromAddress=',
    xdr_send_precanned_message_url: 'https://sitenv.org/xdrmessagesender/sendmessagewithattachmentfilepath',
    xdr_send_uploaded_message_url: 'https://sitenv.org/xdrmessagesender/sendmessagewithattachmentfile',
    canned_ccda_filepaths_url: 'https://sitenv.org/directtransportmessagesender/listsampleccdafiles',
    search_message_logs_by_from_address_url: 'https://sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
    search_message_logs_by_ip_address_url: 'https://sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
    site_xdr_wsdl_url: 'https://sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl',

    ccda_validation_url: 'https://james.sitenv.org/referenceccdaservice/',
    scorecard_url: 'https://ccda.sitenv.org/scorecard/',

    fhir_server_url: 'https://fhir.sitenv.org/open/',
    fhir_query_url: 'https://fhir.sitenv.org/fhirclient/',
    fhir_conformance_url: 'https://fhir.sitenv.org/fhirconformance/',
};
