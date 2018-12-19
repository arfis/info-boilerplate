import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ms-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {

  @Input('imageUrl') url;

  @ViewChild('image') image;
  @ViewChild('glass') glass;

  constructor() { }

  ngOnInit() {
  }

}
