import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangingPageComponent } from './controllers/langing-page/langing-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UsersComponent } from './controllers/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LangingPageComponent,
    MainMenuComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
