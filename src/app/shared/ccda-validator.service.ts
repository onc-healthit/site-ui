/**
 * Created by Brian on 10/4/2016.
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CCDAValidatorService {

  validateCCDA(url: string, referenceFileName: string, validationObjective: string, files: Array<File>,
    severityLevelSelected: string, curesUpdate: boolean = false, svap2022: boolean = false): any {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append("ccdaFile", files[i], files[i].name);
      }
      formData.append("referenceFileName", referenceFileName);
      formData.append("validationObjective", validationObjective);
      formData.append("curesUpdate", curesUpdate);
      formData.append("svap2022", svap2022);
      formData.append("severityLevel", severityLevelSelected);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    })
  }

  getLocalJsonResults(filenameAndPath: string, http: Http): Observable<any> {
    return http.get(filenameAndPath)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      }
      )
  }

  saveResults(): void {
    window.print();
  }

}
