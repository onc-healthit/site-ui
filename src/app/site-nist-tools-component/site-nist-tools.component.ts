import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

const nistToolsMarkdownURL = 'https://raw.githubusercontent.com/Plow74/markdowntest/master/nisttools.md';

@Component({
  selector: 'app-site-nist-tools',
  templateUrl: './site-nist-tools.component.html',
  styleUrls: ['./site-nist-tools.component.css']
})
export class SiteNistToolsComponent implements OnInit {
  nistToolsMarkdown: string;

  constructor(private http:Http) {
    this.nistToolsMarkdown = '';
  }

  ngOnInit() {
    this.getNistTools();
  }

  public getNistTools(){
    return this.http.get(nistToolsMarkdownURL).map(response => response.text()).subscribe(
      data => {
        this.nistToolsMarkdown = data
      },
      err => console.error('There was an error: ' + err)
    );
  }
}
