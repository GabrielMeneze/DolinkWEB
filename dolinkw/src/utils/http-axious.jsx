import axios from 'axios';

export default axios.create({

    baseURL : 'https://localhost:44348/v1/',
    headers : {

        'content-type' : 'application/json'

    }

})

// https://localhost:44330/v1/

//URL TOSHI - CASA
//https://localhost:44348/v1/