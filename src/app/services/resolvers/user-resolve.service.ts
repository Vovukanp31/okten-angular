import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../../interfaces";
import {Observable} from "rxjs";
import {UsersService} from "../users.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser>{

  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {

    let {id} = route.params

    return this.userService.getById(id);
  }
}
