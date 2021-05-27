import axios from 'axios';

export default axios.create({

    baseURL : 'https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/',
    headers : {

        'content-type' : 'application/json'

    }

})

// https://localhost:44330/v1/