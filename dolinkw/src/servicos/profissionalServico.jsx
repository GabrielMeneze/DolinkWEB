const cadastrarProfissional = dados =>{

    return fetch('https://localhost:44363/v1/professional/signup', {
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