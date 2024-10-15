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
  tags!: string[];
  filteredPosts: Post[] = [];

  constructor(private postsSrv: PostsService){}
  post: Post[] = [];
  filtro: string ="";
  filterPost(tag: string) {
    this.filtro = tag.toLowerCase();

    // Se il filtro è vuoto, mostra tutti i post
    if (this.filtro === '') {
      this.filteredPosts = this.posts.slice(1); // Mostra tutti i post tranne il primo (post in evidenza)
    } else {
      // Filtra i post che contengono il tag selezionato
      this.filteredPosts = this.posts.filter(post =>
        post.tags.some(t => t.toLowerCase() === this.filtro)
      ).slice(1); // Filtra, escludendo il primo post
    }
  }
  ngOnInit(){ // caricamento del componente
      this.posts = this.postsSrv.getAllposts(this.filtro)
      this.tags = this.postsSrv.getAllTags()
      console.log(this.tags)
      this.filteredPosts = this.posts.slice(1);

      for ( let i = 1 ; i < this.posts.length; i++){
        this.post.push(this.posts[i]);
      }
     // console.log(this.post[0].title)


  }
}

