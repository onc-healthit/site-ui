import {Pipe, PipeTransform} from "@angular/core";
const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
@Pipe({
  name: 'escapeHtml'
})
export class EscapeHtmlPipe implements PipeTransform {

  transform(htmlToEscape: string): string {
    if (htmlToEscape != null) {
      return htmlToEscape.replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
      });
    }else{
      return null;
    }
  }
}
