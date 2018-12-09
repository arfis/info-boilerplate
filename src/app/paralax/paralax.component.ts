import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.scss']
})
export class ParalaxComponent implements OnInit {

  @Input('backgroundImage') backgroundImage;

  @HostBinding('style.background-image') image;

  constructor() { }

  ngOnInit() {

    this.image = `url('../../${this.backgroundImage}')`;
  }

}
