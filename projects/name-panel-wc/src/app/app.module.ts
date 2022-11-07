import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NamePanelComponent } from 'projects/name-panel/src/public-api';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  entryComponents: [NamePanelComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const NamePanelElement = createCustomElement(NamePanelComponent, {
      injector: this.injector,
    });
    customElements.define('wc-name-panel', NamePanelElement);
  }
}
