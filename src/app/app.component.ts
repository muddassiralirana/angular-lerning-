import { Component, Type } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  // property binding code
  // name:string="ali"
  // disable=false;

  // time check of interpolation
  //  constructor(){
    //   setTimeout(() => {
      //     this.title="change name";
      //   }, 3000);
      //  }
      // counter APP code

      // count=0
// counter(type:string){
// type==="add"? this.count++: this.count--
//  }

// ngif code
// show=true;
// elseif code
// color="green"
// swicth case code
// color="green"



// ng for loop code
// users=["ali","muddassir","fahad","shamshad","bela"];
// usersdata=[
//   {name:"ali",id:23},
//   {name:"ali",id:23},
//   {name:"ali",id:23},
//   {name:"ali",id:23},
//   {name:"ali",id:23}
// ]

// // nested loop code
// users=[
//   {name: 'rana', phone: '1111', socialAccounts:['facebook',"insta", "gmail"]},
//   {name: 'ali', phone: '1111', socialAccounts:['facebook',"linkdin", "gmail"]}
 
// ]      

// style binding code

// color="red"
// bgColor="black"

// updatecolor(){
//   this.color="blue"
//   this.bgColor="green"
// }
// basic angular form code
// userdata:any={}
// getdata(data:NgForm){
// console.log(data)
// this.userdata=data
// }


// toggle btn code

// display=true;
// togle(){
//   this.display=!this.display
// }

// todo list code
// todos:any[]=[]
// addtask(item:string){
// console.log(item)
// this.todos.push({id:this.todos.length,name:item});
// console.log(this.todos)
// }
// remove(id:number){
//   console.log(id)
//   this.todos=this.todos.filter(item=>item.id!==id)
// }

// // parent to child data sending code
// data=10;
// updatchild(){
//   this.data=Math.floor(Math.random()*20)
// }

// component reuseable
// users=[
  //   {name:"ali",id:23},
  //   {name:"aliza",id:44},
  //   {name:"alina",id:56},
  // ]
  
  // child to parent send data component code
// data="empty"
//   updateData(item:string){
// console.warn(item)
// this.data=item
//   }
// two way binding code
// name:any;
// <!-- template refrence variable -->
getval(item:any){
console.log(item);

}
}
