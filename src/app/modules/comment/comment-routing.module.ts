import {RouterModule, Routes} from "@angular/router";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: CommentsComponent, children: [
      {path: ':id', component: CommentDetailsComponent}
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