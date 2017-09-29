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
          this.query = params['query'];
          console.log(this.query);
        }
      );

    // fetching query string from current route
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.query = params['query'];
      }
    );

    this.search();
  }

  // search function
  search() {

    console.log(this.query);
    let q = this.query;
    if(q.search("#") > -1)
      q = q.substr(1);

    console.log(q);

    this.searchService.search(q)
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

    this.addHyperLinkForUser('@');
    this.addHyperLinkForHashTag('#');

  }

  addHyperLinkForUser(symbol){

    // adding hyperlinks to # and @ keywords
    for(var key in this.sources){
      var text = this.sources[key].text;
      var index = text.search(symbol);
      if(index > 0){

        let tag = text.substr(index);
        tag = tag.split(" ")[0];
        let newTag = '<a href=/'+tag+'>'+tag+'</a>';
        const newText = text.replace(tag, newTag);
        this.sources[key].text = newText;

      }
    }
  }

  addHyperLinkForHashTag(symbol){

    // adding hyperlinks to # and @ keywords
    for(var key in this.sources){
      var text = this.sources[key].text;
      var index = text.search(symbol);
      if(index > 0){

        let tag = text.substr(index);
        tag = tag.split(" ")[0];

        const q = tag.substr(1);
        let newTag = '<a href=/hashtag/'+q+'>'+tag+'</a>';
        const newText = text.replace(tag, newTag);

        this.sources[key].text = newText;

      }
    }

  }
}
