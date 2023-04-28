import { Component, Input } from '@angular/core';
import { BdcommentsService } from '../bdcomments.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {

  commentsJson: Data
  @Input() userId: any

  constructor(private bdcomments: BdcommentsService){
    this.commentsJson = this.bdcomments.modifiReply(this.userId)
  }
  send(value){
    this.commentsJson['comments'][this.userId-1]['replies'].push({
      "id": 'you',
      "content": value,
      "createdAt": "now",
      "score": 0,
      "user": {
        "image": {
          "png": this.commentsJson['currentUser']['image']['png'],
          "webp": this.commentsJson['currentUser']['image']['webp']
        },
        "username": this.commentsJson['currentUser']['username']
      }
    })
  }
}
