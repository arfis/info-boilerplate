import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LocationSectionService } from '../../location-section/location-section.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})

export class SectionListComponent implements AfterContentInit {

  @ContentChildren(SectionComponent, {descendants: true}) content!: QueryList<SectionComponent>;
  @Input('automaticScroll') automaticScrollEnabled = true;

  currentValue;
  wheelScroll;

  constructor(private locationSectionService: LocationSectionService) {
    locationSectionService.currentLocation
      .subscribe(
        result => {
          const {location, scroll} = result;
          if (location) {
            this.currentValue = location;
            const section = this.content.find(item => item.id === location);
            if (scroll) {
              this.scrollToItem(section);
            }
          }
        }
      );

  }

  scrollToItem(section) {
    section.element.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  ngAfterContentInit() {
    fromEvent(window, 'wheel').subscribe(e => {
      this.automaticScroll(e);
    });
  }

  automaticScroll(event) {
    const {wheelDeltaY} = event;

    if (this.automaticScrollEnabled) {

      const index = this.content.toArray().findIndex(item =>  item.id === this.currentValue);

      // if (wheelDeltaY < 0) {
      //   if (index + 1 < this.content.length) {
      //     this.currentValue = this.content.toArray()[index + 1].id;
      //     console.log('going DOWN! ', this.currentValue);
      //     this.scrollToItem(this.content.toArray()[index + 1]);
      //   }
      // } else {
      //   if (index - 1 > -1) {
      //     this.currentValue = this.content.toArray()[index - 1].id;
      //     console.log('going UP! ', this.currentValue);
      //     this.scrollToItem(this.content.toArray()[index - 1]);
      //   }
      // }

    }
  }
}
