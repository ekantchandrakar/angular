import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string =
    'Message from the post component to post-list component';

  childMessage: string =
    'From child component to parent component to demonstrate the ViewChild decorator.';

  outputWithEventChildMessage: string =
    'Message from child component via output and eventEmitter';

  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.outputWithEventChildMessage);
  }
}
