import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject' ;
import * as firebase from 'firebase' ;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
    this.getPosts();
  }


  postsSubject = new Subject<any[]>();


  private posts: Array<Post> = [

  ];

  emitpostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addNewPost(post: Post){
    this.posts.push(post) ;
    this.savePosts() ;
    this.emitpostsSubject() ;
  }

/*
  removePost(index: number){
    this.posts.splice(index, 1) ;
    this.emitpostsSubject() ;
  }
*/

  removePost2(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true ;
        }
      }
    );
    this.posts.splice(postIndexToRemove,1);
    this.savePosts();
    this.emitpostsSubject();
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [] ;
        this.emitpostsSubject();
      });
  }

  increaseLoveIts(post: Post) {
    const postIndexToIncrease = this.posts.findIndex(
      (postEl) => {
        if(postEl === post){
          return true;
        }
      }
    );
    this.posts[postIndexToIncrease].loveIts ++ ;
    this.savePosts();
    this.emitpostsSubject();
  }

  decreaseLoveIts(post: Post) {
    const postIndexToDecrease = this.posts.findIndex(
      (postEl) => {
        if(postEl === post){
          return true;
        }
      }
    );
    this.posts[postIndexToDecrease].loveIts -- ;
    this.savePosts();
    this.emitpostsSubject();
  }



}
