import http from '../utils/http-axious';


const listar = dados =>{

    return http.get(`professional`, JSON.stringify(dados), {

    });

}

export default {

    listar

}