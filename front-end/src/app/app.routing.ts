// Import components
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const APP_ROUTES: Routes = [

  {path: '', component : SearchComponent},
  {path: ':query', component : SearchComponent},
  {path: 'search/:query', component : SearchComponent},
  {path: 'hashtag/:query', component : SearchComponent},
  {path: '404/unknown', component: NotfoundComponent},
  {path: '**', redirectTo: '404/unknown'}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
