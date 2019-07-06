import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost.com:3001/api/v1/`
});