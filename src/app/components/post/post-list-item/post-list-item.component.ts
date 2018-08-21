import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Post from '../../../_shared/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Output() love = new EventEmitter<Post>();
  @Output() hate = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    //console.log(post);
    this.love.emit(this.post);
  }
  onHateIt(){
    //console.log(post);
    this.hate.emit(this.post);
  }
}
