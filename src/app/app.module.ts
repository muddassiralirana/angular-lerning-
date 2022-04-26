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
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ChildComponent,
    UsersComponent,
    UsdPkrPipe,
    ElcolorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
