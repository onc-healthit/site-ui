import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

const versionMarkdownURL = 'https://raw.githubusercontent.com/siteadmin/SITE-Content/master/Version.md';
@Component({
  selector: 'site-version',
  templateUrl: './site-version.component.html',
  styleUrls: ['./site-version.component.css']
})
export class SiteVersionComponent implements OnInit {
  versionMarkdown: string;

  constructor(private http:Http) {
    this.versionMarkdown = '';
  }

  ngOnInit() {
    this.getSiteVersion();
  }

  public getSiteVersion(){
    return this.http.get(versionMarkdownURL).map(response => response.text()).subscribe(
      data => {
        this.versionMarkdown = data
      },
      err => console.error('There was an error: ' + err)
    );
  }
}
