import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentRoutingModule} from "./comment-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";



@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ]
})
export class CommentModule { }
