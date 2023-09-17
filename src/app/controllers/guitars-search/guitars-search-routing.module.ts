import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuitarsSearchComponent} from "./guitars-search.component";

const routes: Routes = [
  {
    path: '',
    component: GuitarsSearchComponent
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
export class GuitarsSearchRoutingModule { }
