import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SectionModule } from './section/section.module';
import { LocationSectionModule } from './location-section/location-section.module';
import { LocationSectionService } from './location-section/location-section.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SectionModule,
    LocationSectionModule
  ],
  providers: [
    LocationSectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
