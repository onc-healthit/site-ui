# SiteUi

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

## Current versions
At the time of writing, this is the versions of Node and Angular CLI most recently used to setup Site UI. Other versions may cause a variety of errors, which may be documented in the troubleshooting section.
### Node 8.9.5
### Angular CLI 1.7.4

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

# Troubleshooting

### Problem
To fix this error when running npm install:

![image](https://github.com/onc-healthit/site-ui/assets/112428189/649b914f-d842-4a99-86f2-579f3cc68b02)


### Potential Solution
Ensure the right version of Angular CLI is installed:
npm install -g @angular/cli@1.7.4


### Problem
To fix an error like the following when running ng serve:

![image](https://github.com/onc-healthit/site-ui/assets/112428189/82469322-81a3-43ba-b6dd-b8825d7325d3)


### Potential Solution
Try this

npm install --save-dev @types/node@8.9.5
(Or whatever node version is used)


### Problem
Another potential error when running ng serve is the following:

![image](https://github.com/onc-healthit/site-ui/assets/112428189/14f0ca30-5ef7-4e6f-8f51-2ee652efccf8)


### Potential Solution
This happens because your Angular CLI version and Node JS version are not compatible, a helpful compatibility table can be found here:

https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js

### Problem

Npm install gets stuck

C:\Github\site-ui>npm install -g @angular/cli@1.2.7 [..................] / normalizeTree: sill install loadCurrentTree

### Potential Solution
This happens because you have an incompatible version of Node. Try a different version. (8.9.5 at the time of writing)

### Problem

When attempting to npm install, after a while, an error appears. The message is very long, this is the end of it:

![image](https://github.com/onc-healthit/site-ui/assets/112428189/110c06a6-e76d-4dff-802c-1d46a50ab77c)


### Potential Solution
This also happens because you have an incompatible version of Node. Try a different version. (8.9.5 at the time of writing)

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
