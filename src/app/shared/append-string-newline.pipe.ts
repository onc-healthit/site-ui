import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'appendStringNewline'
})
export class AppendStringNewlinePipe implements PipeTransform {

  transform(appendNewLineToMe: string): string {
    if (appendNewLineToMe !== null){
      return appendNewLineToMe + '\n';
    }else{
      return null;
    }
    
  }

}
