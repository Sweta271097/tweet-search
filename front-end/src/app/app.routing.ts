// Import components
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SearchComponent} from "./search/search.component";

const APP_ROUTES: Routes = [

  {path: '', component : SearchComponent},
  {path: ':query', component : SearchComponent},
  {path: 'search/:query', component : SearchComponent}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
