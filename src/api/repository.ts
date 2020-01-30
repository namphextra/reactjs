import axios from 'axios';

const baseURI = 'http://35.240.159.252:8080';
const baseURL = `${baseURI}/api/v1`;

export default axios.create({
  baseURL,
});
