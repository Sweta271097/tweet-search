// Import components
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from "./app.component";
import {SearchComponent} from "./search/search.component";

const APP_ROUTES: Routes = [

  {path: '', component : AppComponent},
 // {path: 'search/:query', component : AppComponent},
  {path: 'search/:query', component : SearchComponent}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
