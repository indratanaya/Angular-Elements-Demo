import { Component } from '@angular/core';

@Component({
  selector: 'app-name-panel',
  templateUrl: './name-panel.component.html',
  styleUrls: ['./name-panel.component.css'],
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
