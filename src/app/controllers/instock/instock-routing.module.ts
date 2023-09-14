import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstockComponent} from "./instock.component";

const routes: Routes = [
  {
    path: '',
    component: InstockComponent
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
export class InstockRoutingModule { }
