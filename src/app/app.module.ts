import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material/material.module';
import { routes } from '../app/app.router';

import { AppComponent } from './app.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrambbleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
