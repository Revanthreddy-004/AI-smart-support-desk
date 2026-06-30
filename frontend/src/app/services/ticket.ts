import axios from 'axios';

export class TicketService {

  getTickets(token: string) {

    return axios.get(
      'http://localhost:8000/tickets/',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

}