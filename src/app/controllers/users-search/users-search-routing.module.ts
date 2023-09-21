import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersSearchComponent} from "./users-search.component";

const routes: Routes = [
  {
    path: '',
    component: UsersSearchComponent
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
export class UsersSearchRoutingModule { }
