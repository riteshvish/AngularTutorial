import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import * as fdirectives   from '@angular/core';
import { AppComponent } from './app.component';
import * as directives from "./directives";
let allDirectives=[];
console.log(Object.keys(fdirectives));
let allDirectivesKey=Object.keys(directives);
for(var i=0;i<allDirectivesKey.length;i++){
  allDirectives.push(directives[allDirectivesKey[i]])
}
@NgModule({
  declarations:[AppComponent,...allDirectives],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
