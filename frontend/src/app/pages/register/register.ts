import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  username = '';
  email = '';
  password = '';
  role = 'USER';

  register() {

    axios.post(
      'https://ai-smart-support-desk.onrender.com/auth/register',
      {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role
      }
    )
    .then(() => {

      alert('Registration Successful');

      window.location.href = '/login';

    })
    .catch((error) => {

      console.log(error);

      alert('Registration Failed');

    });

  }

}