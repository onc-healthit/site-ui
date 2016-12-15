import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

const featureTableMarkdownURL = 'https://raw.githubusercontent.com/siteadmin/SITE-Content/master/FeatureTable.md';
@Component({
  selector: 'site-features-table',
  templateUrl: './site-features-table.component.html',
  styleUrls: ['site-features-table.component.css']
})
export class SiteFeaturesTableComponent implements OnInit {
  featuresTableMarkdown: string;

  constructor(private http:Http) {
    this.featuresTableMarkdown = '';
  }

  ngOnInit() {
    this.getFeaturesTableMarkdown();
  }

  public getFeaturesTableMarkdown(){
    return this.http.get(featureTableMarkdownURL).map(response => response.text()).subscribe(
        data => {
          this.featuresTableMarkdown = data
        },
        err => console.error('There was an error: ' + err)
    );
  }
}
