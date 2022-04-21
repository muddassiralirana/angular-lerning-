import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
@Input() item:{name:string,id:number}={name:"",id:0} 

  ngOnInit(): void {
  }

}
