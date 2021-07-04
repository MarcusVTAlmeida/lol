import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/11.13.1/data/pt_BR/runesReforged.json'
 
});

export default api;