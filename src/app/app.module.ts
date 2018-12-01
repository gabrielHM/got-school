import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material/material.module';

import { AppComponent } from './app.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrambbleComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
