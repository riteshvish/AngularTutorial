import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.html',
    styleUrls: ['./view.component.scss']
})
export class FormComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    onFormSubmit(){
        // you can also check the form validity here instead disabling the submit button
        if(this.loginForm.valid){

       }
       else{
           // alert the user
       }
    }

}
