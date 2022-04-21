import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
// for child to parent data send
@ Output() updateDataEvent=new EventEmitter<string>()


  // for parent to child
// @Input () item=0 

  ngOnInit(): void {
  }

}
