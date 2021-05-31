import http from '../utils/http-axious';

const listar = () =>{

    return http.get('company', {

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