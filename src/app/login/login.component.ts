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

  async onSubmit(){
    this.submitted = true;
    if(!this.userLogin.valid){
      return
    }
    const user = await this.userService.getUserByEmailAndPassword(this.userLogin.value.email, this.userLogin.value.password);
    if(user){
      localStorage.setItem('user', JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      }));
      this.router.navigate(['products'])
    }
  }



}
