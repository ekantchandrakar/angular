import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-service-tutorial',
  templateUrl: './service-tutorial.component.html',
  styleUrls: ['./service-tutorial.component.css'],
})
export class ServiceTutorialComponent implements OnInit {
  posts: Array<any>;

  constructor() {
    let postService = new PostService();
    this.posts = postService.postList;
  }

  ngOnInit(): void {}
}
