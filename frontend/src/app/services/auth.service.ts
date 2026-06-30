import axios from 'axios';

const API_URL = 'http://localhost:8000';

export class AuthService {

  register(user: any) {

    return axios.post(
      `${API_URL}/auth/register`,
      user
    );
  }

  login(user: any) {

    return axios.post(
      `${API_URL}/auth/login`,
      user
    );
  }
}