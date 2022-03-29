import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Second Angular App'
  url:string="http://google.com"
  imgurl:string="./assets/images/img1.png";
}
