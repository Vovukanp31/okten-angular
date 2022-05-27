import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentsService} from "../../../../services";
import {IComment} from "../../../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment!: IComment

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;

      if (state) {
        this.comment = state
      }
      this.commentsService.getById(id).subscribe(value => this.comment = value)
    })
  }

}
