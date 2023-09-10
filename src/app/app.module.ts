import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './controllers/landing-page/landing-page.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {TranslateModule} from "@ngx-translate/core";
import {NgxPermissionsModule, NgxPermissionsService, NgxRolesService} from "ngx-permissions";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    TranslateModule
  ],
  providers: [
    NgxPermissionsService,
    NgxRolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
