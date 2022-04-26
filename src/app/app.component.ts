import { Component, Type } from '@angular/core';
// for template driven form
import { FormsModule, NgForm } from '@angular/forms';
// for reactive form
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
// getval(item:any){
// console.log(item);

// }

// type script code
// 
// data=10  //its js
// Data:number=10 //its Ts
// types of type script is number, string, boolen , any(is main koi bhi asakta hai) 
// agar humain do type rakhni hon to
// dataType:number | boolean = 0;
// getData(item:number | boolean){
//   if (typeof item==="number"){
//     return item*20;
//   }
// }

// object:{name:string,id:number}={name:"ali",id:2};
// array:string[]=[]

  // // pipes in Angular
  // yeh hamre data ko aik form se dosre form mai transfer karte hain examplae jese apko date k formate ko change karne hai
  // string ko case senitive banana hai pipes html wali file main use hote hain 
// today=Date()

// capFun(item:string){
//   return item.toUpperCase()
// }


// user={name:"ali",id:25}


// form code template driven
// login(item:any){
//   console.log(item)
// }

// form code reactive part form with validation

// login=new FormGroup({
//   name:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]+$")]),
//   password :new FormControl("",[Validators.required,Validators.minLength(6)])
// })

// loginUser(){
//   console.log(this.login.value)
// }

// get name(){
//   return this.login.get("name")
// }
// get password(){
//   return this.login.get("password")
// }













}
