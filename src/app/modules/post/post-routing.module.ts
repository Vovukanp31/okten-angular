import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsComponent} from "./components/posts/posts.component";


const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule {

}