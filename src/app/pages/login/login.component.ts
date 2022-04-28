import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('mahabub');
  password = new FormControl('1234');
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem("user");
    if(user) this.router.navigate(['movies']);
  }

  login() {
    this.errorMessage = '';
    if(this.username.value.trim().length > 0 && this.password.value.trim().length > 0) {
      const credentials = {
        username: this.username.value,
        password: this.password.value
      }
      const isSuccess = this.auth.checkLogin(credentials);
      if(isSuccess) {
        delete credentials.password;
        localStorage.setItem("user", JSON.stringify(credentials));
        this.router.navigate(['movies']);  
      } else this.errorMessage = 'Incorrect username or password!'
    }
    else if(this.username.value.trim().length === 0) this.errorMessage = 'Username is required!';
    else if(this.password.value.trim().length === 0) this.errorMessage = 'Password is required!';
  }

}
