import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderPanelComponent
  ],
  exports: [
    HeaderPanelComponent
  ]
})

export class HeaderModule {
}
