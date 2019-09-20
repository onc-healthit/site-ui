import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
const systemMessageMarkdownURL = 'https://raw.githubusercontent.com/onc-healthit/site-content/master/SITESystemMessage.md';
const COMMENT_PSEUDO_COMMENT_OR_LT_BANG = new RegExp(
    '<!--[\\s\\S]*?(?:-->)?'
    + '<!---+>?'  // A comment with no body
    + '|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?'
    + '|<[?][^>]*>?',  // A pseudo-comment
    'g');
@Component({
  selector: 'site-header',
  templateUrl: './site-header-component.html',
  styleUrls: ['./site-header-component.css']
})
export class SiteHeaderComponent implements OnInit {
  systemMessageMarkdown: string;
  showMessage: boolean;

  constructor(private http:Http) {
    this.systemMessageMarkdown = '';
    this.showMessage = false;
  }

  ngOnInit() {
    this.getSystemMessageMarkdown();
  }

  public getSystemMessageMarkdown(){
    return this.http.get(systemMessageMarkdownURL).map(response => response.text()).subscribe(
        data => {
          this.systemMessageMarkdown = data;
          if (this.systemMessageMarkdown.replace(COMMENT_PSEUDO_COMMENT_OR_LT_BANG, '').trim().length > 0){
            this.showMessage = true;
          }
        },
        err => console.error('There was an error: ' + err)
    );
  }
}
