import {Directive, Input, OnInit} from "@angular/core";
declare var $:any;

@Directive({
    selector: '[lineresultsmap]'
})

export class HighlightCcdaXmlResultDirective implements OnInit{
    @Input() lineresultsmap: any;
    @Input() lineNumber:number = 0;

    constructor() {
    }

    ngOnInit() {
        for (var resultType in this.lineresultsmap){
            var type = resultType;
            var descriptions = this.lineresultsmap[resultType];
            var descriptionsLength = descriptions.length;
            var popoverTemplate = '<span class="popover resultpopover"><div class="clearfix"><span>Line Number: '+this.lineNumber+'</span></div><span class="arrow"></span><h3 class="popover-title result-title"></h3><div class="popover-content"></div><div class="clearfix"></div></span>';
            var popOverContent = this.createResultListPopoverHtml(descriptions);
            if (typeof $('.linenumber-' + this.lineNumber).data('bs.popover') !== "undefined") {
                var title;
                if(type.toLowerCase().indexOf("error") >= 0){
                    title = "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> " + descriptionsLength + " " + type + "(s)";
                }else if(type.toLowerCase().indexOf("warn") >= 0){
                    title = "<span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span> " + descriptionsLength + " " + type + "(s)";
                }else{
                    title = "<span class='glyphicon glyphicon-info-sign' aria-hidden='true'></span> " + descriptionsLength + " " + type + "(s)";
                }
                $('.linenumber-' + this.lineNumber).data('bs.popover').options.content += "<h3 class='popover-title result-title'>" + title + "</h3>" + popOverContent;
            }else {
                if (type.toLowerCase().indexOf("error") >= 0) {
                    $('.linenumber-' + this.lineNumber).popover(
                        {
                            title: "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> " + descriptionsLength + " " + type + "(s)",
                            html: true,
                            content: popOverContent,
                            trigger: "focus",
                            placement: "auto bottom",
                            template: popoverTemplate
                        });
                } else if (type.toLowerCase().indexOf("warn") >= 0) {
                    $('.linenumber-' + this.lineNumber).popover(
                        {
                            title: "<span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span> " + descriptionsLength + " " + type + "(s)",
                            html: true,
                            content: popOverContent,
                            trigger: "focus",
                            placement: "auto bottom",
                            template: popoverTemplate
                        });
                } else {
                    $('.linenumber-' + this.lineNumber).popover(
                        {
                            title: "<span class='glyphicon glyphicon-info-sign' aria-hidden='true'></span> " + descriptionsLength + " " + type + "(s)",
                            html: true,
                            content: popOverContent,
                            trigger: "focus",
                            placement: "auto bottom",
                            template: popoverTemplate
                        });
                }
            }
        }
    }

    private createResultListPopoverHtml(results){
        var htmlList = '<ul>';
        for(var i = 0; i < results.length; i++){
            htmlList += '<li>' + results[i] + '</li>'
        }
        htmlList += '</ul>';
    return htmlList;
}
}
