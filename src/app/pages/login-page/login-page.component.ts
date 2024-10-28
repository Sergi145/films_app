import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  // TODO: FormControl => Formbuilder.

  constructor(private fb:FormBuilder) {
  }
    public myForm:FormGroup = this.fb.group({
      name:['sergi',],
      password:['']
    })

  onSave():void {
    console.log(this.myForm.value);
  }

}
