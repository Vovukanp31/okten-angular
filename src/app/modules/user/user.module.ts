import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserRoutingModule} from "./user-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "../../services";
import {UserResolveService} from "../../services/resolvers";



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    UserResolveService
  ]
})
export class UserModule { }
