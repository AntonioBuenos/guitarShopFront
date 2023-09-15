import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstockSearchComponent} from "./instock-search.component";

const routes: Routes = [
  {
    path: '',
    component: InstockSearchComponent
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
export class InstockSearchRoutingModule { }
