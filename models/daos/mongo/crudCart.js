const Server = require ('../../../server.js')
const Cart = require ('./cart.model.js')

class contenedorCart extends Server {

    async createCart(Cart) {
        try {
            const newCart = new Products(Cart)
            await newCart.save()
            console.log('Producto agregado al carrito');
        } catch (error) {
            console.log(error);
        }
    }
    async readCart() {
        try {
            const ProductsCart = await Cart.find()
            console.log(ProductsCart);
        } catch (error) {
            console.log(error);
        }
    }
    async updateCart(name) {
        try {
            await Cart.updateOne({
                name: name
            }, {
                $set: {
                    qty: newQty
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProduct(name) {
        try {
            await Cart.deleteOne({
                name: name
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = contenedorCart