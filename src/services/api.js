import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export function getContacts() {
  return axios.get('/contacts').then(({ data }) => data);
}
