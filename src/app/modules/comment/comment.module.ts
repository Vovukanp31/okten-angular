import { NgModule } from '@angular/core';
import {CommentRoutingModule} from "./comment-routing.module";

import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentsService} from "../../services";
import {CommentResolveService} from "../../services/resolvers";



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
  ],
  providers: [
    CommentsService,
    CommentResolveService
  ]
})
export class CommentModule { }
