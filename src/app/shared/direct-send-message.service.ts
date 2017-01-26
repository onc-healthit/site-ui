/**
 * Created by Brian on 10/4/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class DirectSendMessageService {

  sendMessageWithAttachmentFile(url: string, toAddress: string, files: Array<File>) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("attachment", files[i], files[i].name);
      }
      formData.append("toAddress", toAddress);
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

  sendMessageWithAttachmentFilePath(url: string, toAddress: string, attachmentFilePath: string) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      formData.append("toAddress", toAddress);
      formData.append("attachmentFilePath", attachmentFilePath);
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
