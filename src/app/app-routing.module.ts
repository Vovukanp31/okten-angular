import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes = [{
      path: '', component: MainLayoutComponent, children: [
        {path: '', redirectTo: 'users', pathMatch: 'full'},
        {path: 'users', loadChildren: () => import('./modules').then(value => value.UserModule)},
        {path: 'posts', loadChildren: () => import('./modules').then(value => value.PostModule)},
        {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)}
      ]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
