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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { DataService } from './shared/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ParalaxComponent,
    PanelComponent,
    FooterComponent,
    PanelsContainerComponent,
    PricesComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SectionModule,
    LocationSectionModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LocationSectionService,
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
