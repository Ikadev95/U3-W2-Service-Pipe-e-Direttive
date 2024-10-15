import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit {
  @Input() singlePost!:Post

  ngOnInit() {
    console.log('Received Post:', this.singlePost);
  }
}
