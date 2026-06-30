import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

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