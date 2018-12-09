import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // img = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F22%2F04%2F07%2F21%2F9757e437-5ec1-4378-804f-ca0f9567c110%2F380048_Widakk.png?auto=format&ch=Width%2CDPR&w=250&h=250';
  img = 'http://relaxworlds.sk/domains/relaxworlds/UserFiles/images/logo.png';
  items = [
    {label: 'Intro', link: 'intro'},
    {label: 'Sauna', link: 'sauna'},
    {label: 'Massage', link: 'massage'},
    {label: 'Jacuzzi', link: 'jacuzzi'},
    {label: 'Cennik', link: 'price'}
  ];

  sauna = {
    title: 'Sauna',
    message: 'Saunovanie adsakl djasdk jaksd jkahjkd khjkw hjehj agbdasjdbjabd jbqkjwn dkjqnd kjqwnd kqnwkdj nqkjwdn qkjwdn kqjwndqjkw njkqnwdkqwjndjkqwndwnjkqw'
  };
  panelData = [
    {
      title: 'product.jacuzzi',
      message: 'message jacuzi daskod askod kasod oaskdo askod osado askodaso dsa',
      picture: 'http://relaxworlds.sk/UserFiles/Image/2013_05_27_16_43_44.png'
    },
    {
      title: 'product.massage',
      message: 'message jacuzi daskod askod kasod oaskdo askod osado askodaso dsa',
      picture: 'http://relaxworlds.sk/UserFiles/Image/2013_05_27_16_43_51.png'
    },
    {
      title: 'product.sauna',
      message: 'message jacuzi daskod askod kasod oaskdo askod osado askodaso dsa',
      picture: 'http://relaxworlds.sk/UserFiles/Image/2013_05_27_16_43_58.png'
    }
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'sk']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

}

