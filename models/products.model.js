const {Schema, model} = require('mongoose')

export const productSchema = new Schema({
    name:  {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type : Number, 
        required: true, 
    },
    category: {
        type: String,
        max: 100
    },
    stock: {
        type: Number, 
        required: true,
    }
})
module.exports = model('Products', productSchema)