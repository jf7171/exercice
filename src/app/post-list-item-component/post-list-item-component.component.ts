import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() {}

  @Input() postTitle : string ;
  @Input() postContent : string ;
  @Input() postLoveIts : number ;
  @Input() postDate : Date ;

  increaseLoveIts() {
    this.postLoveIts ++ ;
  }

  decreaseLoveIts() {
    this.postLoveIts -- ;
  }

  lastUpdate = new Date();

  ngOnInit() {
  }

}
