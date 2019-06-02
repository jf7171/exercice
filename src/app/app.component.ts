import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'exercice';

  posts: Array<Post> = [
    {
      title : 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : 'Mon deuxième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : 'Mon troisième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      loveIts : 0,
      created_at : new Date()
    }
  ];

}


class Post {
 title: string;
 content: string;
 loveIts : Number;
 created_at: Date;
};
