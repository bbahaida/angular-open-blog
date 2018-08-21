import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Post from '../../../_shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];
  @Output('love') love= new EventEmitter<Post>();
  @Output('hate') hate= new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  onLoveIt(post: Post){
    //console.log(post)
    this.love.emit({...post});
  }
  onHateIt(post: Post){
    //console.log(post)
    this.hate.emit({...post});
  }


}
