const cadastrarProfissional = dados =>{

    return fetch('https://localhost:44348/v1/professional/signup', {
        method : 'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })

}

export default {

    cadastrarProfissional

}