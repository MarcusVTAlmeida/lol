import axios from 'axios';

const api3 = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/platform/v3/champion-rotations'
 
});

export default api3;