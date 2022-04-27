import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


interface datatype{
  name:string,
  id:number
}
@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  ulr="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }
  user(){
    return this.http.get(this.ulr)
  }
  sendData(data:any){
    return this.http.post(this.ulr,data);

  }

  data(){
    let val:datatype={
      name:"ali",
      id:52
    }
  }
}
