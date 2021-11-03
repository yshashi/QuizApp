import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private api: ApiService) { }

  public loginForm !: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.required]
    });
  }
  login() {

    this.http.get<any>("http://localhost:3000/register")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          alert("Login Success!!");
          this.router.navigate(['home']);
          this.loginForm.reset();
        }
      }, err => {
        alert("Something went wrong!!")
      })
  }
}
