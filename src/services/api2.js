import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/11.12.1/data/pt_BR/item.json'
 
});

export default api;