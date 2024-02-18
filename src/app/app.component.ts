import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messsage: string = 'Message from the TypeScript component file';
  imgUrl: string =
    'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';
}
