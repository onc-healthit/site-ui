/**
 * Created by Brian on 10/4/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class CCDAValidatorService {

  validateR1(url: string, ccdaTypeVal: string, files: Array<File>) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("file", files[i], files[i].name);
      }
      formData.append("type_val", ccdaTypeVal);
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

  validateR2(url: string, referenceFileName: string, validationObjective: string, files: Array<File>) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("ccdaFile", files[i], files[i].name);
      }
      formData.append("referenceFileName", referenceFileName);
      formData.append("validationObjective", validationObjective);

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
}
