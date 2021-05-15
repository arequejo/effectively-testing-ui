import axios from 'axios';
import { FormContact } from '../support/types';

axios.defaults.baseURL = 'http://localhost:3001';

export function getContacts() {
  return axios.get('/contacts').then(({ data }) => data);
}

export function saveContact(contact: FormContact) {
  return axios.post('/contacts', contact).then(({ data }) => data);
}
