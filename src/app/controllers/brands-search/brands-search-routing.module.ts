import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrandsSearchComponent} from "./brands-search.component";

const routes: Routes = [
  {
    path: '',
    component: BrandsSearchComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsSearchRoutingModule { }
