import {Component, OnInit, ViewChild} from "@angular/core";
import {Http} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";

const ccdaValidatorReleaseNotesMarkdownURL = 'https://raw.githubusercontent.com/onc-healthit/site-content/master/CCDAValidatorReleaseNotes.md';
@Component({
  selector: 'ccda-validator-release-notes',
  templateUrl: './ccda-validator-release-notes.component.html',
  styleUrls: ['./ccda-validator-release-notes.component.css']
})
export class CcdaValidatorReleaseNotesComponent implements OnInit {
  @ViewChild('releaseNotesModal') modal: ModalComponent;
  releaseNotesMarkdown: string;

  constructor(private http:Http) {
    this.releaseNotesMarkdown = '';
  }

  ngOnInit() {
  }

  public getReleaseNotes(){
    return this.http.get(ccdaValidatorReleaseNotesMarkdownURL).map(response => response.text()).subscribe(
      data => {
        this.releaseNotesMarkdown = data
      },
      err => console.error('There was an error: ' + err),
      () => this.modal.open()
    );
  }
}
