import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = 'Message coming from parent component';
  messageFromChild: string;
  fromChildOutput: string;

  @ViewChild(PostComponent) childComponent: any;

  constructor() {
    console.log(this.childComponent);
  }

  ngAfterViewInit(): void {
    console.log(this.childComponent);
    this.messageFromChild = this.childComponent.childMessage;
  }

  receiveMessage($event: any) {
    this.fromChildOutput = $event;
  }
}
