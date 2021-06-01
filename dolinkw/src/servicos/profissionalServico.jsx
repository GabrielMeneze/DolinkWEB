const cadastrarProfissional = dados =>{

    return fetch('https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/profissional', {
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