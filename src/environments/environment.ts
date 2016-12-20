// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  r1_url: 'https://devccda.sitenv.org/CCDAValidatorServices/r1.1/',
  r2_url: 'https://devccda.sitenv.org/referenceccdaservice/',
  direct_url: 'https://devportal.sitenv.org/web/site/transport',
  scorecard_url: 'https://devportal.sitenv.org/scorecard/',
  fhir_url: 'https://devportal.sitenv.org/web/site/fhir-sandbox',
};
