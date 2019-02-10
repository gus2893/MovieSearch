import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID 86183a70fc7176e4354b628c142bf6425f47d481a775d983d5365a0e9f6af5e2'
    },

});