import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(
    private router: Router
  ) {}

  login() {

    axios.post(
      'http://localhost:8000/auth/login',
      {
        email: this.email,
        password: this.password
      }
    )
    .then((response) => {

      localStorage.setItem(
        'token',
        response.data.access_token
      );

      alert('Login Successful');

      this.router.navigate(
        ['/dashboard']
      );
    })
    .catch(() => {

      alert('Invalid Credentials');

    });
  }
}