import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "JSP name";

  cleanJspName = () => {
    this.title = "";
  }

  transformToJspSearchRegex = (element:any, id:any) => {
    var prevRegex = "\\/(\\w+\.jsp.*)[\\s\\S\\n].*";

    var jspName = element ;

    if(jspName ==="detailUitgaandeFacturenAction"){
        jspName = "detailUitgaandeFactuurAction";
    }
    
    var regexResult = prevRegex + jspName;

    console.log(regexResult);
    console.log('title', this.title);

    this.title = regexResult;

    navigator.clipboard.writeText(regexResult);
    
    $("label." + id).show();

    $("." + id).stop().css("background-color", "#FFFF9C")
    .animate({ backgroundColor: "#FFFFFF"}, 700);

    setTimeout( () => {
        $("label." + id).hide();
        this.title = "JSP name";
    }, 2000);
}
 



}
