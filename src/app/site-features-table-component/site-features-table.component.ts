import {Component, OnInit} from "@angular/core";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

const featureTableMarkdownURL = environment.featureTableMarkdownURL;
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
