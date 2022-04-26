import { Component, OnInit } from '@angular/core';
// for dynamic routing
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("user id is ",this.route.snapshot.paramMap.get("id"));
  }

}
