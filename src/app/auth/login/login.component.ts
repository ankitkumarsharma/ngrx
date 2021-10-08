import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginType } from '../core/config/auth.types';
import { getLoginAction } from '../core/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted!:boolean;
  constructor(private _fb:FormBuilder, private _store:Store<any>) { }

  ngOnInit(): void {
    this.formInit();
  }
  get fc(){
    return this.loginForm.controls;
  }
  formInit(){
    this.loginForm = this._fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
  }
  onSubmit(value:LoginType){
    this.submitted = true;
    if(this.loginForm.valid){
      this.submitted = false;
      this._store.dispatch(getLoginAction({payload: value}));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  resetForm(){
    this.loginForm.reset();
    this.submitted = false; 
  }

}

