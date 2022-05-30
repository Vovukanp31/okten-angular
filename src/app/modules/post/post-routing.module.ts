import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostResolveService} from "../../services/resolvers";
import {MainGuard} from "../../guards/main.guard";


const routes: Routes = [
  {
    path: '', component: PostsComponent, canActivate: [MainGuard], children: [
      {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolveService}}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule {

}
