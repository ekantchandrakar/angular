import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-tutorial',
  templateUrl: './directive-tutorial.component.html',
  styleUrls: ['./directive-tutorial.component.css'],
})
export class DirectiveTutorialComponent {
  postArray: string[] = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  stepForm: string = 'something else';

  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
  ];

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'Post 6' });
  }

  deleteItem(index: any) {
    this.objArray.splice(index, 1);
  }

  onClick(status: string) {
    this.stepForm = status;
  }
}
