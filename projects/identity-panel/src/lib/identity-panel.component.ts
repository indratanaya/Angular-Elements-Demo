import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-identity-panel',
  templateUrl: 'identity-panel.component.html',
  styles: [],
})
export class IdentityPanelComponent {
  @Input() name!: string;
}
