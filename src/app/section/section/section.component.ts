import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { LocationSectionService } from '../../location-section/location-section.service';
import { fromEvent } from 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class SectionComponent implements OnInit {

  @Input() id;

  onScroll() {
    const {top} = this.element.nativeElement.getBoundingClientRect();

    if (top >= 0 && top < 40) {
      this.locationSectionService.currentLocation.next({location: this.id, scroll: false});
      this.location.go(this.id);
    }
  }

  constructor(public element: ElementRef,
              private location: Location,
              private locationSectionService: LocationSectionService) {
  }

  ngOnInit() {
    fromEvent(window, 'scroll').subscribe(e => {
      this.onScroll();
    });
  }

}
