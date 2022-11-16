import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router) { 
    this.form = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form);

    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if (usuario == 'jperez' && password == 'admin123') {
      // Redireccionamos al dashboard
      this.fakeLoading();
    } else {
      // Mostramos un mensaje de error
      this.error();
      this.form.reset();
    }
            
  }
  error() {
    this._snackBar.open('Usuario o contrasena ingresado son invalidos', '', {
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom'
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {

      this.router.navigate(['dashboard']);
    }, 1500);
  }


}
