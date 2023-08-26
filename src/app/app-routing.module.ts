import { NgModule } from '@angular/core';
import {RouterModule, Routes, UrlSerializer} from '@angular/router';
import {NamedRouterPathSerializer} from "./utils/named-router-path-serializer";
import {View} from "./models/helpers.model";
import {BrandsComponent} from "./controllers/brands/brands.component";
import {GuitarsComponent} from "./controllers/guitars/guitars.component";
import {InstockComponent} from "./controllers/instock/instock.component";
import {PageNotFoundComponent} from "./controllers/page-not-found/page-not-found.component";
import {LandingPageComponent} from "./controllers/landing-page/landing-page.component";
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  {
    path: 'search-users',
    loadChildren: () => import('./controllers/users-search/users-search.module').then(m => m.UsersSearchModule),
    outlet: 'menu'
  },
  {
    path: 'search-brands',
    loadChildren: () => import('./controllers/brands-search/brands-search.module').then(m => m.BrandsSearchModule),
    outlet: 'menu'
  },
  {
    path: 'search-guitars',
    loadChildren: () => import('./controllers/guitars-search/guitars-search.module').then(m => m.GuitarsSearchModule),
    outlet: 'menu'
  },
  {
    path: 'search-instock',
    loadChildren: () => import('./controllers/instock-search/instock-search.module').then(m => m.InstockSearchModule),
    outlet: 'menu'
  },
  {
    path: 'users',
    loadChildren: () => import('./controllers/users/users.module').then(m => m.UsersModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      view: View.USE,
      title: 'MENU.USR',
      permissions: {
        only: [],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'brands', component: BrandsComponent,
    loadChildren: () => import('./controllers/companies/companies.module').then(m => m.BrandsModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      view: View.BRA,
      title: 'MENU.BRA',
      permissions: {
        only: [],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'guitars', component: GuitarsComponent,
    loadChildren: () => import('./controllers/guitars/guitars.module').then(m => m.GuitarsModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      view: View.GUI,
      title: 'MENU.GUI',
      permissions: {
        only: [],
        redirectTo: '/'
      }
    }
  },
  {
    path: 'instock', component: InstockComponent,
    loadChildren: () => import('./controllers/instock/instock.module').then(m => m.InstockModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      view: View.INS,
      title: 'MENU.INS',
      permissions: {
        only: [],
        redirectTo: '/'
      }
    }
  },
  {
    path: View.ERROR,
    component: PageNotFoundComponent
  },
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [],
        redirectTo: View.ERROR
      }
    },
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: View.ERROR,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: UrlSerializer, useClass: NamedRouterPathSerializer}
  ]
})
export class AppRoutingModule { }
