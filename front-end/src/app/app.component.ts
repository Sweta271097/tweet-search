import { Component } from '@angular/core';
import { SearchService } from "../services/search.service.client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private searchService: SearchService){}

  title = 'app';
  query = '';
  result = [];

  search() {

    this.searchService.search(this.query)
      .subscribe(
        (data: any) => {
          console.log(data._body);
          const body = JSON.parse(data._body);
          this.result = body;
        },
        (error: any) => console.log(error)
      );

  }
}
