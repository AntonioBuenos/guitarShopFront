import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuitarsComponent} from "./guitars.component";

const routes: Routes = [
  {
    path: '',
    component: GuitarsComponent
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
export class GuitarsRoutingModule { }
