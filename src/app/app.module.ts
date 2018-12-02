import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from '../app/app.router';
import { FusionChartsModule } from 'angular-fusioncharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter, CalendarMonthModule, CalendarCommonModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { DemoComponent } from '.component';
import { HttpClientModule } from '@angular/common/http';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion)

import { AppComponent } from './app.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GamesComponent } from './components/games/games.component';
import { LeaderboardComponent } from './shared/components/leaderboard/leaderboard.component';
import { ScrambleReviewComponent } from './components/scrambble/scramble-review/scramble-review.component';
import { ScramblePlayComponent } from './components/scrambble/scramble-play/scramble-play.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SpanishGameComponent } from './components/spanish-game/spanish-game.component';
import { AccentRulesDialogComponent } from './components/spanish-game/accent-rules-dialog/accent-rules-dialog.component';
import { VideoResourcesComponent } from './components/video-resources/video-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrambbleComponent,
    LoginComponent,
    NavbarComponent,
    GamesComponent,
    LeaderboardComponent,
    ScrambleReviewComponent,
    ScramblePlayComponent,
    ProfileComponent,
    SpanishGameComponent,
    AccentRulesDialogComponent,
    VideoResourcesComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FusionChartsModule,
    routes,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CalendarMonthModule,
    HttpClientModule,
    routes,
  
  ],
  entryComponents: [
    AccentRulesDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
