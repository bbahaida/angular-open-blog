import { Component } from '@angular/core';
import Post from './_shared/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(){
    this.posts = [
      new Post(
        'test 1', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus turpis ut eros mollis vulputate. Aliquam vitae velit id ligula cursus facilisis vitae nec ex.', 
        2, 
        new Date()),
      new Post(
        'test 2', 
        'Nulla nunc leo, cursus eget hendrerit ac, ultricies ac risus. Proin porttitor pellentesque auctor. Phasellus ornare, velit consequat venenatis lobortis, ante lectus aliquet magna,', 
        -2, 
        new Date()),
      new Post(
        'test 3', 
        'Cras vehicula enim ut libero placerat fringilla. Nam molestie neque vel ante eleifend, in facilisis augue finibus. Nam consequat', 
        0, 
        new Date()),
    ]
  }

  onLoveIt(post: Post){
    //console.log(post);
    this.posts.find(p => p.title === post.title).loveIts+=1;
  }
  onHateIt(post: Post){
    this.posts.find(p => p.title === post.title).loveIts-=1;
  }

}
