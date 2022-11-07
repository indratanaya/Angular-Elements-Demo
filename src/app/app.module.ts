import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NamePanelModule } from 'projects/name-panel/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NamePanelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
