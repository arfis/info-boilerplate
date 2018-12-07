import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SectionListComponent,
    SectionComponent
  ],
  exports: [
    SectionListComponent,
    SectionComponent
  ]
})
export class SectionModule { }
