
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from './registermodel';
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup
  registerModelObj : RegisterModel = new RegisterModel();
 

  constructor(private FormBuilder:FormBuilder,
    private api : ApiService, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      email:[''],
      password:[''],
      id:['']
    })
  }
  register(){
    this.registerModelObj.email = this.registerForm.value.email;
    this.registerModelObj.password = this.registerForm.value.password;
    
    this.api.postRegister(this.registerModelObj)
    .subscribe(res=>{
      alert("Registered Successfully");
      this.registerForm.reset();
      this.registerModelObj = new RegisterModel();
      this.router.navigate(['login']);
    })
  }

}

