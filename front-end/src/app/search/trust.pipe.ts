/**
 * Created by mayankrd on 9/28/17.
 * Class to convert a unsafe HTML, Hyperlink or other HTML element to be safe for embedding into the view
 */
import {Pipe} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
@Pipe({name: 'safeHtml'})

export class Safe {
  constructor(private sanitizer:DomSanitizer){}

  transform(style) {
     return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
