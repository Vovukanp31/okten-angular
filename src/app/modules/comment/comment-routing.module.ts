import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolveService} from "../../services/resolvers";
import {MainGuard} from "../../guards/main.guard";

const routes: Routes = [
  {path: '', component: CommentsComponent, canActivate: [MainGuard], children: [
      {path: ':id', component: CommentDetailsComponent, resolve:{data: CommentResolveService}}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CommentRoutingModule {}
