import axios from 'axios';

const api = axios.create({
    baseURL: 'https://breakingbadapi.com/api/',
    timeout: 3000,
    headers: {'Content-Type': 'application/json'} // Apesar de não precisar, deixei a configuração caso algum dia precise
});

export default api;