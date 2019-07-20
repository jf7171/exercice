import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  constructor(private postsService: PostsService) { }

  posts : any[] ;
  postSubscription: Subscription ;

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts ;
      }
    );
    this.postsService.emitpostsSubject();
  }


  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
