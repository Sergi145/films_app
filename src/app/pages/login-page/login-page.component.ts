import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {environemnt} from "../../environment/environment";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  // TODO: FormControl => Formbuilder.

  loginError: string = '';

  constructor(private fb:FormBuilder, private router: Router) {
  }
    public myForm:FormGroup = this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required, Validators.min(0)]]
    })

  onSave():void {
    console.log(this.myForm.value);
    this.myForm.reset({
      name:'',
      password: ''
    })

  }

  isValidField(field:string) {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched;
  }

  getFieldError(field:string):string | null {
      if(!this.myForm.controls[field]) return null;

      const errors = this.myForm.controls[field].errors || {};

      for (const key of Object.keys(errors)) {
        switch (key) {
          case 'required':
            return 'Este campo es requerido';
          case 'minlength':
            return 'Este campo tiene que tener más de 3 letras'
        }
      }

      return '';
  }

  login() {



    const {name, password} = this.myForm.value;

    if (name === environemnt.validUser.name && password === environemnt.validUser.password) {
      localStorage.setItem('isLoggedIn', 'true'); // Marca que el usuario ha iniciado sesión
      this.router.navigate(['home']); // Redirige a la página protegida
      this.loginError = '';
    } else {
      this.loginError = "Credenciales incorrectas";
      setTimeout(() => {
        this.loginError = '';
      }, 2000);
    }

  }





}
