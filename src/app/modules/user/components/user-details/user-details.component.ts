import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UsersService} from "../../../../services";
import {IUser} from "../../../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!: IUser


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      this.usersService.getById(id).subscribe(value => this.user = value)
    })
  }

}
