import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  constructor(private postsService: PostsService) {}

  @Input() postTitle : string ;
  @Input() postContent : string ;
  @Input() postLoveIts : number ;
  @Input() postDate : Date ;
  @Input() indexOfPost : number ;
  @Input() postObject : Post ;

  onIncreaseLoveIts() {
    this.postsService.increaseLoveIts(this.postObject);
  }

  onDecreaseLoveIts() {
    this.postsService.decreaseLoveIts(this.postObject);
  }

  lastUpdate = new Date();

  ngOnInit() {
  }

  onDeletePost(){
    //this.postsService.removePost(this.indexOfPost);
    this.postsService.removePost2(this.postObject);
  }

}
