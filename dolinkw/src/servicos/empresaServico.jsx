import http from '../utils/http-axious';

const listar = dados =>{

    return http.get(`company`, JSON.stringify(dados), {

    });

}

const alterar = dados => {
    return http.put(`company/${dados.id}`, JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-dolink')}`
        }
    });
}

const excluir = dados => {
    return http.delete(`company/${dados.id}`, JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-dolink')}`
        }
    });
}

export default {

    listar

}