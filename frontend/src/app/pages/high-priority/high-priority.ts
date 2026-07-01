import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-high-priority',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './high-priority.html',
  styleUrl: './high-priority.css'
})
export class HighPriority implements OnInit {

  tickets: any[] = [];

  ngOnInit(): void {

    const token =
      localStorage.getItem('token');

    axios.get(
      'https://ai-smart-support-desk.onrender.com/tickets/high-priority',
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    )
    .then((response) => {

      console.log(response.data);

      if (Array.isArray(response.data)) {

        this.tickets =
          response.data;

      }
      else {

        this.tickets =
          [response.data];

      }

    });

  }

  logout() {

    localStorage.removeItem(
      'token'
    );

    window.location.href =
      '/login';

  }

}