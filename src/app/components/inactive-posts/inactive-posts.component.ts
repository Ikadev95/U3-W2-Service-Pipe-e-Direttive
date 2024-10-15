import { PostsService } from './../../services/posts.service';
import { Component } from '@angular/core';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  posts! : Post[];
  constructor(private PostsSvc: PostsService){}
  post: Post[] = [];
  ngOnInit(){ // caricamento del componente
    this.posts = this.PostsSvc.getAllposts('')
    this.post = this.posts.filter(post => post.active === false)
  }
}
