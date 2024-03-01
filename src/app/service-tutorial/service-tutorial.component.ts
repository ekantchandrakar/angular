import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-service-tutorial',
  templateUrl: './service-tutorial.component.html',
  styleUrls: ['./service-tutorial.component.css'],
})
export class ServiceTutorialComponent implements OnInit {
  posts: Array<Post>;

  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }

  ngOnInit(): void {}

  addNewData() {
    let newPost: Post = {
      id: 7,
      postTitle: 'Post 7',
    };

    this.postService.addPost(newPost);
  }
}
