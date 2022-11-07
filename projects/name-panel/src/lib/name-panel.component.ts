import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-name-panel',
  templateUrl: './name-panel.component.html',
  styleUrls: ['./name-panel.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NamePanelComponent {
  names = ['james', 'alex', 'ron'];
  sltNameIndex = 0;

  switchName() {
    if (this.sltNameIndex === 2) {
      this.sltNameIndex = 0;
      return;
    }

    this.sltNameIndex = this.sltNameIndex + 1;
  }
}
