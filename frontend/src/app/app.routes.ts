import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { CreateTicket } from './pages/create-ticket/create-ticket';
import { TicketList } from './pages/ticket-list/ticket-list';
import { HighPriority } from './pages/high-priority/high-priority';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'create-ticket',
    component: CreateTicket
  },

  {
    path: 'ticket-list',
    component: TicketList
  },

  {
    path: 'high-priority',
    component: HighPriority
  },

  {
    path: '**',
    redirectTo: ''
  }

];