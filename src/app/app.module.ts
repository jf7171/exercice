import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostsService } from './services/posts.service';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'new' , component: PostFormComponent },
  { path : 'posts', component: PostListComponentComponent },
  { path: '', component: PostListComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    HeaderComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
