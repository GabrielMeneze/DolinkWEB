const logar = dados =>{

    return fetch('https://localhost:44328/v1/account/signin', {
        method : 'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })

}

export default {

    logar

}