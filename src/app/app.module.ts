import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { UsersComponent } from './users/users.component';
import { UsdPkrPipe } from './customPipes/usd-pkr.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { ElcolorDirective } from './directive/elcolor.directive';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './routing/about/about.component';
import { HomeComponent } from './routing/home/home.component';
import { ContactComponent } from './routing/contact/contact.component';
import { NopageComponent } from './routing/nopage/nopage.component';
import { Aboutchil1Component } from './routing/aboutchil1/aboutchil1.component';
import { Aboutchil2Component } from './routing/aboutchil2/aboutchil2.component';
import { FooterComponent } from './footer/footer.component';
// for api 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ChildComponent,
    UsersComponent,
    UsdPkrPipe,
    ElcolorDirective,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NopageComponent,
    Aboutchil1Component,
    Aboutchil2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
