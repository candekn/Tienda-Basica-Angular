import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;
  submitted: Boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { 
    this.userLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern( /([A-Za-z0-9]{1,}@[A-Za-z]{4,}\.[A-Za-z]{2,3})/)] ),
      password: new FormControl('', [Validators.required])
    });
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  get formValidator(){
    return this.userLogin.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    console.log("🚀 ~ file: login.component.ts ~ line 34 ~ LoginComponent ~ onSubmit ~ this.userLogin", this.userLogin)
    if(!this.userLogin.valid){
      return
    }
    //this.userService.getUserByEmailAndPassword(this.userLogin.value)

    this.router.navigate(['products'])
  }



}
