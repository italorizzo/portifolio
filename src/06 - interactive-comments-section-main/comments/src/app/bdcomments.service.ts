import { Injectable } from '@angular/core';
import data from "../assets/data.json"
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdcommentsService {

  modificated: any

  formated(): void{
    for(let c = 0; c < this.modificated['comments'].length; c++){
      this.modificated['comments'][c]['reply'] = false
    }
  }
  getMessagens(): Data{
    this.modificated = data
    this.formated()
    return this.modificated
  }
  modifiReply(id){
    for(let elemento of this.modificated['comments']){
      if(elemento['id'] == id){
        this.modificated['comments'][id-1]['reply'] = !this.modificated['comments'][id-1]['reply']
      }
    }
    return this.modificated
  }
  newComment(){
    // this.modificated
  }
}
