import {
  Component,
  ChangeDetectorRef
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import axios from 'axios';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './create-ticket.html',
  styleUrl: './create-ticket.css'
})
export class CreateTicket {

  title = '';
  description = '';
  category = '';
  priority = '';

  aiResponse = '';

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  createTicket() {

    const token =
      localStorage.getItem('token');

    axios.post(
      'https://ai-smart-support-desk.onrender.com/tickets/',
      {
        title: this.title,
        description: this.description,
        category: this.category,
        priority: this.priority
      },
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    )
    .then((response) => {

      console.log(response.data);

      this.aiResponse =
    response.data.ai_analysis;

      alert(
        'Ticket Created Successfully'
      );

      this.cdr.detectChanges();

    })
    .catch((error) => {

      console.log(error);

      alert(
        'Error Creating Ticket'
      );

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