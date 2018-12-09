import { Component, Input, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { LocationSectionService } from '../../location-section/location-section.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class HeaderPanelComponent implements OnInit{

  // test
  @Input('items') items;
  @Input('img') img;

  selectedItem;
  hoveredItem;

  isScrolled;
  activeTranslation;
  allLanguages;
  languageSettingsVisible = false;

  constructor(private location: Location,
              private locationService: LocationSectionService,
              private translateService: TranslateService) {

    this.locationService.currentLocation.subscribe(result => {
      if (result) {
        const {location: link} = result;
        if (link) {
          this.location.go(link);
          this.selectedItem = this.items.find(item => item.link === link);
        }
      }
    })
  }

  ngOnInit() {
    this.activeTranslation = `assets/img/flags/${this.translateService.currentLang}.png`;
    this.allLanguages = this.translateService.langs;

    this.translateService.onLangChange.subscribe(
      () => {
        const activeLang = this.translateService.currentLang;
        this.activeTranslation = `assets/img/flags/${activeLang}.png`;
      }
    )

    fromEvent(window, 'scroll')
      .subscribe(e => {
        // const offsetHeight = this.isScrolled ? 0 : 55;
      if (document.documentElement.scrollTop < 55) {
        this.isScrolled = false;
      } else {
        this.isScrolled = true;
      }
    });
  }

  openLanguages() {
    this.languageSettingsVisible = !this.languageSettingsVisible;
  }

  selectItem(item) {
    this.locationChange(item.link);
  }

  setLanguage(language) {
    this.translateService.use(language);
    this.languageSettingsVisible = false;
  }

  resetHoverItem() {
    this.hoveredItem = null;
  }

  hoverItem(item) {
    this.hoveredItem = item;
  }

  hasUnderline(item) {
    return this.selectedItem === item || this.hoveredItem === item;
  }

  getLanguageImage(language) {
    return `assets/img/flags/${language}.png`;
  }

  private locationChange(location) {
    this.locationService.currentLocation.next({location, scroll: true});
    this.location.go(location);
  }
}
