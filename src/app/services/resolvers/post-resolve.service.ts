import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPost} from "../../interfaces";
import {Observable} from "rxjs";
import {PostsService} from "../posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost>{

  constructor(private postService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {

    let {id} = route.params;

    return this.postService.getById(id);
  }
}
