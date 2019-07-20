import { Component } from '@angular/core';
import { Post } from './models/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'exercice';

  constructor(){
    const config = {
      apiKey: "AIzaSyC7HXiGeCibu_VXy3ovKLukHyV-c3C5D_U",
      authDomain: "exercice-post.firebaseapp.com",
      databaseURL: "https://exercice-post.firebaseio.com",
      projectId: "exercice-post",
      storageBucket: "",
      messagingSenderId: "1094915623439",
      appId: "1:1094915623439:web:f7bc70debe2ea652"
    }
    firebase.initializeApp(config);
  }

}
