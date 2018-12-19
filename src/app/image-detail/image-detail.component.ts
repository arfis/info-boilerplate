import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'ms-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnChanges, OnInit {

  @Input('image') image;
  @Output('onClose') onCloseEmitter = new EventEmitter();
  @Output('onNext') onNextEmitter = new EventEmitter();
  @Output('onPrevious') onPreviousEmitter = new EventEmitter();

  @ViewChild('imageDetail') imageDetail;
  @ViewChild('imageElement') imageElement;

  calculatedImageHeight = 'auto';
  calculatedImageWidth = 'auto';

  constructor(private element: ElementRef,
              private ref: ChangeDetectorRef) {
  }

  ngOnChanges(changes) {
    if (changes.image) {
      if (this.image) {
        this.calculateSizes(this.image);
      }
    }
  }

  calculateSizes(image) {
    const {width, height} = image;
    if (width > height) {
      this.calculatedImageHeight = 'auto';
      this.calculatedImageWidth = 100 + 'vh';
    } else {
      this.calculatedImageWidth = 'auto';
      this.calculatedImageHeight = 80 + 'vh';
    }
  }

  ngOnInit() {
    fromEvent(this.element.nativeElement, 'click').subscribe((event) => {
      if (!this.imageDetail.nativeElement.contains((event as any).target)) {
        this.onCloseEmitter.next();
      }
    });
  }

  close() {
    this.onCloseEmitter.next();
  }

  next() {
    this.onNextEmitter.next();
  }

  previous() {
    this.onPreviousEmitter.next();
  }
}
