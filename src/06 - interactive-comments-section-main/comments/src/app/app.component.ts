import { Component } from '@angular/core';
import { BdcommentsService } from './bdcomments.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comments';

  commentsJson: Data
  clickPositive: boolean = false
  clickNegative: boolean = false

  constructor(private bdcomments: BdcommentsService){}

  ngOnInit(){
    this.commentsJson = this.bdcomments.getMessagens()
  }

  positive(id: number): void{
    this.clickPositive = !this.clickPositive
    if(this.clickNegative == true){
      this.commentsJson['comments'][id-1]['score'] += 1
      this.clickNegative = !this.clickNegative
    }
    if(this.clickPositive == true){
      for(let element of this.commentsJson['comments']){
        if(element['id'] == id){
          this.commentsJson['comments'][id-1]['score'] += 1
        }
      }
    }else{
      for(let element of this.commentsJson['comments']){
        if(element['id'] == id){
          this.commentsJson['comments'][id-1]['score'] -= 1
        }
      }
    }
  }
  negative(id: number): void{
    this.clickNegative = !this.clickNegative
    if(this.clickPositive == true){
      this.commentsJson['comments'][id-1]['score'] -= 1
      this.clickPositive = !this.clickPositive
    }
    if(this.clickNegative == true){
      for(let element of this.commentsJson['comments']){
        if(element['id'] == id){
          this.commentsJson['comments'][id-1]['score'] -= 1
        }
      }
    }else{
      for(let element of this.commentsJson['comments']){
        if(element['id'] == id){
          this.commentsJson['comments'][id-1]['score'] += 1
        }
      }
    }
  }
  createReply(id){
    console.log(this.bdcomments.modifiReply(id))
  }
}
