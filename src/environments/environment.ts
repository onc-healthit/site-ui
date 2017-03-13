// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  ccda_validation_url: 'https://ttpdstest.sitenv.org:8443/referenceccdaservice/',
  trustanchor_upload_url: 'https://devccda.sitenv.org/trustanchoruploader/uploadtrustanchor',
  trustbundle_download_url: 'https://devccda.sitenv.org/trustanchoruploader/downloadtrustbundle',
  direct_send_precanned_message_url: 'https://devccda.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfilepath',
  direct_send_uploaded_message_url: 'https://devccda.sitenv.org/directtransportmessagesender/sendmessagewithattachmentfile',
  xdr_send_precanned_message_url: 'https://devccda.sitenv.org/xdrmessagesender/sendmessagewithattachmentfilepath',
  xdr_send_uploaded_message_url: 'https://devccda.sitenv.org/xdrmessagesender/sendmessagewithattachmentfile',
  canned_ccda_filepaths_url: 'https://devccda.sitenv.org/directtransportmessagesender/listsampleccdafiles',
  scorecard_url: 'https://devportal.sitenv.org/scorecard/',
  fhir_url: 'https://devportal.sitenv.org/web/site/fhir-sandbox',
  search_message_logs_by_from_address_url: 'https://devccda.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyfromaddress?fromAddress=',
  search_message_logs_by_ip_address_url: 'https://devccda.sitenv.org/xdrmessagevalidator/messagelogs/getlogsbyipaddress?ipAddress=',
  site_xdr_wsdl_url: 'https://devccda.sitenv.org/xdrmessagevalidator/Dispatcher/XDRService.wsdl'
};
