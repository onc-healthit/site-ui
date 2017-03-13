/**
 * Created by Brian on 10/4/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class TrustanchorUploadService {

  uploadTrustanchor(url: string, files: Array<File>) :any{
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      for(let i = 0; i < files.length; i++) {
        formData.append("anchoruploadfile", files[i], files[i].name);
      }
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
