import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './controllers/landing-page/landing-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UsersComponent } from './controllers/users/users.component';
import { GuitarsComponent } from './controllers/guitars/guitars.component';
import { BrandsComponent } from './controllers/brands/brands.component';
import { InstockComponent } from './controllers/instock/instock.component';
import { PageNotFoundComponent } from './controllers/page-not-found/page-not-found.component';
import { UsersSearchComponent } from './controllers/users-search/users-search.component';
import { BrandsSearchComponent } from './controllers/brands-search/brands-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainMenuComponent,
    UsersComponent,
    GuitarsComponent,
    BrandsComponent,
    InstockComponent,
    PageNotFoundComponent,
    UsersSearchComponent,
    BrandsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
