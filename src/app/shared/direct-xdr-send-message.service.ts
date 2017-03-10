/**
 * Created by Brian on 10/4/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class DirectXdrSendMessageService {

  public sendMessageWithAttachmentFile(url: string, endpoint: string, files: Array<File>, directFromAddress: string, directToAddress: string, messageType: string) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("attachment", files[i], files[i].name);
      }
      formData.append("endpoint", endpoint);
      formData.append("messageType", messageType);
      this.setOptionalFormData(formData, directFromAddress, directToAddress);
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

  public sendMessageWithAttachmentFilePath(url: string, endpoint: string, attachmentFilePath: string, directFromAddress: string, directToAddress: string, messageType: string) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      formData.append("endpoint", endpoint);
      formData.append("messageType", messageType);
      formData.append("attachmentFilePath", attachmentFilePath);
      this.setOptionalFormData(formData, directFromAddress, directToAddress);
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

  private setOptionalFormData(formData: FormData, directFromAddress: string, directToAddress: string){
    if (directFromAddress){
      formData.append("directFromAddress", directFromAddress);
    }
    
    if (directToAddress){
      formData.append("directToAddress", directToAddress)
    }
  }
}
