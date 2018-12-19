import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'ms-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {

  imageList;
  openedImage;
  imageIndex;

  constructor(private element: ElementRef,
              private dataService: DataService) {
    this.getFileList();
  }

  closeImage() {
    this.openedImage = null;
  }

  openImageDetail(image) {
    this.openedImage = image;
    this.imageIndex = this.imageList.findIndex(currentImage => currentImage === image);
  }

  startAutomaticChange() {
    setInterval(() => this.setNextImage(), 200);
  }

  getFileList() {
    this.dataService.getPictureList().subscribe(
      ({files}) => {
        this.imageList = files;
      }
    );
  }

  setNextImage() {
    this.imageIndex++;
    this.openedImage = this.imageList[this.imageIndex];
  }

  setPreviousImage() {
    this.imageIndex--;
    this.openedImage = this.imageList[this.imageIndex];
  }
}
