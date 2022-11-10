const mongoose = require ('mongoose')
// import mongoose from 'mongoose'
const Products = require ('./models/products.model.js')
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
    async createProduct(product){
        try {
            const newProduct = new Products (product)
            await newProduct.save() 
            console.log('Producto Creado');
        } catch (error) {
            console.log(error);
        }
    }
    async readProducts(){
        try {
           const Productos = await Products.find() 
           console.log(Productos);
        } catch (error) {
            console.log(error);
        }
    }
    async update(){
        try {
            await Products.updateOne({name: 'Agua de Tamarindo'},{$set: {name: 'A. de Tamarindo'}})
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProduct (){
        try {
            await Products.deleteOne({name: 'A. de Tamarindo'})
        } catch (error) {
            console.log(error);
        }
    }
   
}
const server = new Server()

// server.createProduct({name: 'Agua de Tamarindo', price: 35, stock: 59, category: 'bebidas' })
// server.updateUser()
// server.readProducts()
// server.deleteProduct()
// server.readProducts()
// export {Server}