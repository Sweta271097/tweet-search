import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SearchService} from "../services/search.service.client";
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {Routing} from "./app.routing";
import { SearchComponent } from './search/search.component';
import {Safe} from "./search/trust.pipe";
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    Safe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule, Routing
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
