/**
 * Created by Brian on 10/4/2016.
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { HttpClient } from  '@angular/common/http';
import { environment } from "../../environments/environment";

const keyCloakURL = environment.jwt_accesstoken_endpoint;
const keyClientID = environment.jwt_accesstoken_client;

@Injectable()
export class CCDAValidatorService {

constructor(private  http : HttpClient){}

  validateCCDA(url: string, referenceFileName: string, validationObjective: string, files: Array<File>,
    severityLevelSelected: string, curesUpdate: boolean = false, svap2022: boolean = false,svap2023: boolean = false): any {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      // let xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        console.log("form data append ccdaFile ....."+files[i].name);
        formData.append("ccdaFile", files[i], files[i].name);
      }
      formData.append("referenceFileName", referenceFileName);
      formData.append("validationObjective", validationObjective);
      formData.append("curesUpdate", curesUpdate);
      formData.append("svap2022", svap2022);
      formData.append("svap2023", svap2023);
      formData.append("severityLevel", severityLevelSelected);
      formData.append("ccdaurl", url);

      formData.append("keycloakurl", keyCloakURL);
      formData.append("clientid", keyClientID);

      this.http.post("/api",formData).subscribe(response => {
        console.log(" response ::::"+response);
        resolve(response);
      },(error ) =>{
        console.log("with httpOptions JSON.stringify ::::::"+JSON.stringify(error));
        reject("ERROR_CCDA");
      }
      );
    })
  }

  getLocalJsonResults(filenameAndPath: string, http: Http): Observable<any> {
    return http.get(filenameAndPath)
      .map((response: Response) => {
        console.log(response.json());
        console.log("response json:::::"+response.json());
        return response.json();
      }
      )
  }

  saveResults(): void {
    window.print();
  }

}
