import { Component, Injector } from '@angular/core';
import {
  createCustomElement,
  NgElement,
  WithProperties,
} from '@angular/elements';
import { NamePanelComponent } from './name-panel/name-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(injector: Injector) {
    // Convert `NamePanelComponent` to a custom element
    const namePanelElement = createCustomElement(NamePanelComponent, {
      injector,
    });
    // Register the custom element with the browser
    customElements.define('el-name-panel', namePanelElement);
  }

  showNamePanel() {
    // Create element
    const namePanelElement: NgElement & WithProperties<NamePanelComponent> =
      document.createElement('el-name-panel') as any;
    // Add to the DOM
    document.body.appendChild(namePanelElement);
  }
}
