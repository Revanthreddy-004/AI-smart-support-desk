import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-ticket-list',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList implements OnInit {

  tickets: any[] = [];

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {

    const token =
      localStorage.getItem('token');

    axios.get(
      'https://ai-smart-support-desk.onrender.com/tickets/',
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    )
    .then((response) => {

      this.tickets =
        response.data;

    })
    .catch((error) => {

      console.log(error);

    });

  }

  closeTicket(id: number) {

    const token =
      localStorage.getItem('token');

    axios.put(
      `https://ai-smart-support-desk.onrender.com/tickets/${id}`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    )
    .then(() => {

      alert("Ticket Closed");

      this.loadTickets();

    });

  }

  deleteTicket(id: number) {

    const token =
      localStorage.getItem('token');

    axios.delete(
      `https://ai-smart-support-desk.onrender.com/tickets/${id}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    )
    .then(() => {

      alert("Ticket Deleted");

      this.loadTickets();

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