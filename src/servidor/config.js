//configuração da api 

import axios from 'axios'

export const http = axios.create({

    baseURL:'http://localhost/projetog/public/',
})

