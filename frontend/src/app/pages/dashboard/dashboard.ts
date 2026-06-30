import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  total = 0;
  open = 0;
  closed = 0;
  high = 0;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    axios.get(
      'http://localhost:8000/dashboard/analytics'
    )
    .then((response) => {

      console.log(response.data);

      this.total =
        response.data.total_tickets;

      this.open =
        response.data.open_tickets;

      this.closed =
        response.data.closed_tickets;

      this.high =
        response.data.high_priority_tickets;

      this.cdr.detectChanges();

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