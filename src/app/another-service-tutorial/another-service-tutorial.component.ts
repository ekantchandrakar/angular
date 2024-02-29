import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-another-service-tutorial',
  templateUrl: './another-service-tutorial.component.html',
  styleUrls: ['./another-service-tutorial.component.css'],
})
export class AnotherServiceTutorialComponent {
  postList: Array<any>;

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }
}
