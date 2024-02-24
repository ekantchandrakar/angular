import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isTrue: boolean = false;

  buttonClick(): void {
    console.log('Button Click Event Worked');
  }

  onKeyUp(): void {
    console.log('Enter key is pressed');
  }
}
