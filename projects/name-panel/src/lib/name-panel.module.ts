import { NgModule } from '@angular/core';
import { IdentityPanelModule } from 'identity-panel';
import { NamePanelComponent } from './name-panel.component';

@NgModule({
  declarations: [NamePanelComponent],
  imports: [IdentityPanelModule],
  exports: [NamePanelComponent],
})
export class NamePanelModule {}
