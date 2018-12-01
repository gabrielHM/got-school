import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from '../app/app.router';

import { AppComponent } from './app.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrambbleComponent,
    LoginComponent,
    NavbarComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
