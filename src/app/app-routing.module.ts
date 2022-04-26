import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes}  from "@angular/router"
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { HomeComponent } from './routing/home/home.component';
import { NopageComponent } from './routing/nopage/nopage.component';
import { Aboutchil1Component } from './routing/aboutchil1/aboutchil1.component';
import { Aboutchil2Component } from './routing/aboutchil2/aboutchil2.component';

const routes: Routes = [
  // {
  // path: "about/:id",
  // component:  AboutComponent,
  // },
  {
  path: 'contact',
  component:  ContactComponent,
  },
  {
    path: 'about',
    component:  AboutComponent,
    children:[
      {
        path: 'about1',
        component:  Aboutchil1Component,
        },
        {
          path: 'about2',
          component:  Aboutchil2Component,
          },
    ]
    },
  {
  path:"",
  component:HomeComponent,
  },
  {
    path:"**",  //double star is wild card kehlata hai agar koi page nahi mily ga web to yeh chal jaye ga

    component:NopageComponent,
    }
];


@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

