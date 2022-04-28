import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { SideComponent } from './side/side.component';



@NgModule({
  declarations: [
    HeadComponent,
    SideComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    HeadComponent
  ]
})
export class ModuleModule { }
