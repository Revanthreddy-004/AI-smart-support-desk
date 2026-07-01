import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  email = '';
  password = '';

  register() {

    axios.post(
      'https://ai-smart-support-desk.onrender.com/auth/register',
      {
        email: this.email,
        password: this.password
      }
    )
    .then(() => {

      alert(
        'Registration Successful'
      );

      window.location.href =
        '/login';

    })
    .catch((error) => {

      console.log(error);

      alert(
        'Registration Failed'
      );

    });

  }

}