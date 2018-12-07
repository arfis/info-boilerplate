import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  img = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F22%2F04%2F07%2F21%2F9757e437-5ec1-4378-804f-ca0f9567c110%2F380048_Widakk.png?auto=format&ch=Width%2CDPR&w=250&h=250';
  items = [
    {label: 'Intro', link: 'intro'},
    {label: 'Home', link: 'home'},
    {label: 'About', link: 'about'},
    {label: 'Orange', link: 'orange'},
  ];
}
