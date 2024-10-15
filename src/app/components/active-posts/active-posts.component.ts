import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
    posts!: Post[]
    constructor(private postsSrv: PostsService){}
    post: Post[] = [];

  ngOnInit(){ // caricamento del componente
    this.posts = this.postsSrv.getAllposts()
    this.post = this.posts.filter(post => post.active === true)

}}
