import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppendStringNewlinePipe} from "./append-string-newline.pipe";
import {EscapeHtmlPipe} from "./escape-html.pipe";
import {HyphenateStringPipe} from "./hyphenate-string.pipe";
import {FormsModule} from "@angular/forms";
import {PageOverviewHeaderComponent} from "./page-overview-header-component/page-overview-header.component";
import {MarkdownToHtmlPipe} from "./MarkdownToHtml.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppendStringNewlinePipe,
    EscapeHtmlPipe,
    HyphenateStringPipe,
    PageOverviewHeaderComponent,
    MarkdownToHtmlPipe
  ],
  exports: [
    CommonModule,
    AppendStringNewlinePipe,
    EscapeHtmlPipe,
    HyphenateStringPipe,
    FormsModule,
    PageOverviewHeaderComponent,
    MarkdownToHtmlPipe
  ]
})
export class SharedModule {
}
