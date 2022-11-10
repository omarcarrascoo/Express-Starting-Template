// import Server from "../../../server.js";

const Server = require ('../../../server.js')
const Products = require ('./products.model.js')

class contenedotProductos extends Server {

    async createProduct(product) {
        try {
            const newProduct = new Products(product)
            await newProduct.save()
            console.log('Producto Creado');
        } catch (error) {
            console.log(error);
        }
    }
    async readProducts() {
        try {
            const Productos = await Products.find()
            console.log(Productos);
        } catch (error) {
            console.log(error);
        }
    }
    async updateProduct() {
        try {
            await Products.updateOne({
                name: 'Agua de Tamarindo'
            }, {
                $set: {
                    name: 'A. de Tamarindo'
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProduct() {
        try {
            await Products.deleteOne({
                name: 'A. de Tamarindo'
            })
        } catch (error) {
            console.log(error);
        }
    }
}

contenedotProductos.readProducts()

module.exports = contenedotProductos