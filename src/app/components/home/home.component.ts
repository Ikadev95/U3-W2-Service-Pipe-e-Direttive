import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/post';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  posts!: Post[]
  constructor(private postsSrv: PostsService){}
  post: Post[] = [];
  ngOnInit(){ // caricamento del componente
      this.posts = this.postsSrv.getAllposts()


      for ( let i = 1 ; i < this.posts.length; i++){
        this.post.push(this.posts[i]);
      }
     // console.log(this.post[0].title)

  }
}

