import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../services/search.service.client";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer){}

  title = 'app';
  query = '';
  result = [];
  sources = [];

  ngOnInit(){

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          console.log(params['query']);
          this.query = params['query'];
        }
      );

    // fetching userId and websiteId from current url
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['query']);
        this.query = params['query'];
      }
    );

    this.search();
  }

  search() {

    console.log(this.query);

    this.searchService.search(this.query)
      .subscribe(
        (data: any) => {
          console.log(data._body);
          const body = JSON.parse(data._body);
          this.convertToHTML(body);
          this.result = body;
        },
        (error: any) => console.log(error)
      );
  }

  convertToHTML(body) {
    console.log(body);

    for(var key in body){
      this.sources.push(body[key]['_source']);
    }

    // adding hyperlinks to # and @ keywords
    for(var key in this.sources){
      var text = this.sources[key].text;
      var index = text.search("@");
      if(index > 0){

        let tag = text.substr(index);
        tag = tag.split("\\s")[0];
        let newTag = '<a href=/'+tag+'>'+tag+'</a>';
        const newText = text.replace(tag, newTag);
        this.sources[key].text = newText;

      }
    }
  }
}
