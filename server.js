const mongoose = require ('mongoose')
// import mongoose from 'mongoose'

// import {Products }from './models/products.model.js'

class Server {
    constructor(){
        this.connect()
    }
    connect(){
        try {
            const URL = 'mongodb://localhost:27017/ecommerce'
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
    
            })
            console.log('conectado a la base de datos')
        } catch (error) {
            console.log(error);
        }
    }
   
}
const server = new Server()

// server.createProduct({name: 'Agua de Tamarindo', price: 35, stock: 59, category: 'bebidas' })
// server.updateProduct()
// server.readProducts()
// server.deleteProduct()
// export {Server}

module.exports = Server;
