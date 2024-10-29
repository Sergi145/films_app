import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  // TODO: FormControl => Formbuilder.

  constructor(private fb:FormBuilder, private router: Router) {
  }
    public myForm:FormGroup = this.fb.group({
      name:['sergi',[Validators.required, Validators.minLength(3)]],
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
    localStorage.setItem('isLoggedIn', 'true'); // Simula el inicio de sesión
    this.router.navigate(['home']); // Redirige a la página protegida
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); // Elimina el estado de sesión
    this.router.navigate(['/login']); // Redirige al login
  }



}
