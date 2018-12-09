import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SectionModule } from './section/section.module';
import { LocationSectionModule } from './location-section/location-section.module';
import { LocationSectionService } from './location-section/location-section.service';
import { ParalaxComponent } from './paralax/paralax.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { PanelsContainerComponent } from './panels-container/panels-container.component';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    ParalaxComponent,
    PanelComponent,
    FooterComponent,
    PanelsContainerComponent,
    PricesComponent
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
