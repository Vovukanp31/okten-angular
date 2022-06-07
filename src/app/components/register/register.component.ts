import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  usernameError!: string;

  constructor(private authService: AuthService, private router: Router) { this._createForm() }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
    }, [this._checkPassword])
  }

  register(): void {
   const formValue = this.form.value;
   delete formValue.confirmPassword;
   this.authService._register(formValue).subscribe(() => this.router.navigate(['login']),
      e => this.usernameError = e.error.username[0])
  }

  _checkPassword(form: AbstractControl): ValidationErrors| null {
   const password = form.get('password');
   const confirmPassword = form.get('confirmPassword');
   return password?.value === confirmPassword?.value ? null : {notSame: true}
  }
}
