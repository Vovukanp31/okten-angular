import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostRoutingModule} from "./post-routing.module";
import {PostComponent} from "./components/post/post.component";
import {PostResolveService} from "../../services/resolvers";
import {PostsService} from "../../services";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService,
    PostResolveService
  ]
})
export class PostModule { }
