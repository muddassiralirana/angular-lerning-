import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:"ali",id:32},
      {name:"ali",id:32},
      {name:"ali",id:32},
    ]
  }
}
