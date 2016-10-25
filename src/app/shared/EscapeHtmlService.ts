/**
 * Created by Brian on 10/20/2016.
 */
import {Injectable} from "@angular/core";
const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};
@Injectable()
export class EscapeHtmlService {

    escapeHtml(htmlToEscape: string) :string{
        return htmlToEscape.replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    }
}