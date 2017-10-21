import { Component,ViewEncapsulation,EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
    loginForm: FormGroup;
    clicked=false;
    username = new FormControl('',
      [Validators.required, Validators.minLength(6), this.hasAtTheRateMark]
    );

      hasAtTheRateMark(input: FormControl) {
        const hasAtTheRate = input.value.indexOf('@') >= 0;
        return hasAtTheRate ? null : { needsAtTheRate: true };
      }
    password = new FormControl('', [Validators.required, Validators.minLength(8),
    this.hasNumbers]);
    hasNumbers(input: FormControl) {
      const hasNum = input.value.match(/[0-9]/gi);
      return hasNum ? null : { needANumber : true };
    }
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });

    }

    onFormSubmit(){
      this.clicked=true;
        // you can also check the form validity here instead disabling the submit button
       if(this.loginForm.valid){
        //  alert("valid")
       }
       else{
           console.log("not valid")
       }
    }
  title = 'app';
  data:object={};
  login(data){
    alert(JSON.stringify(data))
  }
  enterHandler(event) {
    console.log(event);
  }
  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();
  list=[{edit:true}]
  editText(item,index){
    item.edit=true;
    this.myFocusTriggeringEventEmitter.emit(this.list[index]["edit"]);
  }
  saveText(item){
    item.edit=false;
  }
  addRow(event,last){
    if(last){
      this.list.push({edit:true});
    }
  }
  deleteRow(index){
    this.list.splice(index,1)
  }
}
