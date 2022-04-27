import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../services/userdata.service"
import {ApidataService} from "../services/apidata.service"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  // for service
  // user:any;
  // constructor(private userdata:UserdataService){
  // console.log(userdata.users())
  // this.user=userdata.users()
  // }



  // for api

  datas:any;
constructor(private apidata:ApidataService){
apidata.user().subscribe((data)=>{
  this.datas=data
  console.warn(data)

})
}
  

  ngOnInit(): void {
  }

}
