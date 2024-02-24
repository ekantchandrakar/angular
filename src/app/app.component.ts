import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isTrue: boolean = false;

  userNameUsingTWDB: string;

  buttonClick(): void {
    console.log('Button Click Event Worked');
  }

  onKeyUp(username: string): void {
    console.log(username);
  }

  onKeyupInTWDB(): void {
    console.log(`Angular TWDB: ${this.userNameUsingTWDB}`);
  }
}
