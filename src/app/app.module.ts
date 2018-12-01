import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from '../app/app.router';

import { AppComponent } from './app.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GamesComponent } from './components/games/games.component';
import { LeaderboardComponent } from './shared/components/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrambbleComponent,
    LoginComponent,
    NavbarComponent,
    GamesComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
