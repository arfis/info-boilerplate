import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input('title') title;
  @Input('message') message;
  @Input('picture') picture;

  @Input('openable') openable;

  isFullscreen = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    fromEvent(window, 'click')
      .subscribe(e => {
      const {target} = e;


        if (this.el.nativeElement.contains(event.target)) {
          this.isFullscreen = true;
        } else {
          this.closeFullscreen();
        }
    });

    fromEvent(window, 'keydown')
      .subscribe(e => {
        const {key} = (e as any);

        if (key === 'Escape') {
          this.closeFullscreen();
        }
      });
  }

  closeFullscreen() {
    this.isFullscreen = false;
  }
}
