import axios from 'axios';

/*
Change baseURL to suit your project needs.
*/
const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

export default http;
