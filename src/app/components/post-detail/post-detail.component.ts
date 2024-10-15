import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { ActivatedRoute } from '@angular/router';
import { iResponse } from '../../Models/response';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  post!: Post
  postArr: Post[] = [];
  paramsId! : string
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.paramsId = params.id;
    });

    fetch('./assets/db.json')
      .then((res) => <Promise<iResponse>>res.json())
      .then((dati) => {
        console.log(dati.posts);

        // Filtra i post attivi
        this.postArr = dati.posts
        console.log(this.postArr)


          const found = this.postArr.find((post: Post) => post.id === Number(this.paramsId));
          if (found){
            this.post = found
          }

        // Cerca il post corrispondente all'id nei post attivi


        console.log(this.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
